import { GameState, Team } from '@/types/sound-game'
import { getRandomCategory, getRandomCard } from './utils'

type Action =
  | { type: 'START_GAME'; teams: Team[]; timer: number; rounds: number }
  | { type: 'ROLL_DICE' }
  | { type: 'START_TURN' }
  | { type: 'CORRECT' }
  | { type: 'SKIP' }
  | { type: 'TICK' }
  | { type: 'TIME_UP' }
  | { type: 'NEXT_TURN' }
  | { type: 'RESTART' }

export const initialState: GameState = {
  phase: 'setup',
  teams: [],
  currentTeamIndex: 0,
  currentCategory: null,
  currentCard: null,
  usedCardIds: [],
  timer: 60,
  timeLeft: 60,
  isPlaying: false,
  roundsTotal: 3,
  roundsCurrent: 0,
}

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {

    case 'START_GAME':
      return {
        ...initialState,
        phase: 'rolling',
        teams: action.teams,
        timer: action.timer,
        timeLeft: action.timer,
        roundsTotal: action.rounds,
      }

    case 'ROLL_DICE': {
      const category = getRandomCategory()
      return {
        ...state,
        currentCategory: category,
      }
    }

    case 'START_TURN': {
      const card = getRandomCard(state.currentCategory!, state.usedCardIds)
      return {
        ...state,
        phase: 'playing',
        currentCard: card,
        usedCardIds: [...state.usedCardIds, card.id],
        timeLeft: state.timer,
        isPlaying: true,
      }
    }

    case 'CORRECT': {
      const points = state.currentCard?.difficulty ?? 1
      const updatedTeams = state.teams.map((team, index) =>
        index === state.currentTeamIndex
          ? { ...team, score: team.score + points }
          : team
      )
      const nextCard = getRandomCard(state.currentCategory!, state.usedCardIds)
      return {
        ...state,
        teams: updatedTeams,
        currentCard: nextCard,
        usedCardIds: [...state.usedCardIds, nextCard.id],
      }
    }

    case 'SKIP': {
      const nextCard = getRandomCard(state.currentCategory!, state.usedCardIds)
      return {
        ...state,
        currentCard: nextCard,
        usedCardIds: [...state.usedCardIds, nextCard.id],
      }
    }

    case 'TICK':
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      }

    case 'TIME_UP':
      return {
        ...state,
        phase: 'turn-end',
        isPlaying: false,
      }

    case 'NEXT_TURN': {
      const nextRoundsCurrent = state.roundsCurrent + 1
      const isLastTeam = state.currentTeamIndex === state.teams.length - 1
      const nextTeamIndex = isLastTeam ? 0 : state.currentTeamIndex + 1

      // Si el último equipo completó sus rondas → fin del juego
      if (isLastTeam && nextRoundsCurrent >= state.roundsTotal) {
        return {
          ...state,
          phase: 'results',
        }
      }

      return {
        ...state,
        phase: 'rolling',
        currentTeamIndex: nextTeamIndex,
        currentCategory: null,
        currentCard: null,
        roundsCurrent: nextRoundsCurrent,
        timeLeft: state.timer,
      }
    }

    case 'RESTART':
      return initialState

    default:
      return state
  }
}