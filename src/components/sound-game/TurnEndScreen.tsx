import { GameState } from '@/types/sound-game'
import { Scoreboard } from './Scoreboard'

interface TurnEndScreenProps {
  state: GameState
  onNext: () => void
}

export function TurnEndScreen({ state, onNext }: TurnEndScreenProps) {
  const currentTeam = state.teams[state.currentTeamIndex]
  const isLastTurn =
    state.currentTeamIndex === state.teams.length - 1 &&
    state.roundsCurrent + 1 >= state.roundsTotal

  return (
    <div className="flex flex-col items-center gap-8 pt-8 text-center">

      <div className="flex flex-col gap-2">
        <p className="text-5xl">⏰</p>
        <h2 className="text-3xl font-bold">¡Tiempo!</h2>
        <p className="text-muted-foreground">Turno de {currentTeam.name}</p>
      </div>

      <div className="w-full rounded-xl border border-border bg-card p-6 flex flex-col items-center gap-1">
        <p className="text-muted-foreground text-sm">Puntaje total</p>
        <p className="text-5xl font-bold">{currentTeam.score}</p>
        <p className="text-muted-foreground text-sm">puntos</p>
      </div>

      <Scoreboard
        teams={state.teams}
        currentTeamIndex={state.currentTeamIndex}
      />

      <button
        onClick={onNext}
        className="w-full h-14 rounded-xl bg-brand-blue text-white font-bold text-lg hover:opacity-90 transition-opacity"
      >
        {isLastTurn ? 'Ver resultados →' : 'Siguiente turno →'}
      </button>

    </div>
  )
}