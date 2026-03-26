export type Difficulty = 1 | 2 | 3

export interface Card {
  id: string
  text: string
  category: string
  difficulty: Difficulty
}

export interface Team {
  id: string
  name: string
  score: number
}

export type GamePhase =
  | 'setup'
  | 'rolling'
  | 'playing'
  | 'turn-end'
  | 'results'

export interface GameState {
  phase: GamePhase
  teams: Team[]
  currentTeamIndex: number
  currentCategory: string | null
  currentCard: Card | null
  usedCardIds: string[]
  timer: number
  timeLeft: number
  isPlaying: boolean
  roundsTotal: number
  roundsCurrent: number
}