import { GameState } from '@/types/sound-game'

interface ResultsScreenProps {
  state: GameState
  onRestart: () => void
}

export function ResultsScreen({ state, onRestart }: ResultsScreenProps) {
  const sorted = [...state.teams].sort((a, b) => b.score - a.score)
  const winner = sorted[0]
  const isTie = sorted[0].score === sorted[1].score

  return (
    <div className="flex flex-col items-center gap-8 pt-8 text-center">

      <div className="flex flex-col gap-2">
        <p className="text-5xl">🏆</p>
        <h2 className="text-3xl font-bold">¡Fin del juego!</h2>
        {isTie ? (
          <p className="text-muted-foreground">¡Empate!</p>
        ) : (
          <p className="text-muted-foreground">
            Ganó <span className="text-foreground font-bold">{winner.name}</span>
          </p>
        )}
      </div>

      <div className="w-full flex flex-col gap-3">
        {sorted.map((team, index) => (
          <div
            key={team.id}
            className={`flex items-center justify-between px-5 py-4 rounded-xl border ${
              index === 0 && !isTie
                ? 'border-brand-blue bg-card'
                : 'border-border bg-card'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">
                {index === 0 && !isTie ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </span>
              <span className="font-bold">{team.name}</span>
            </div>
            <span className="font-bold text-lg">{team.score} pts</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full h-14 rounded-xl border border-border text-foreground font-bold text-lg hover:border-brand-blue transition-colors"
      >
        Jugar de nuevo
      </button>

    </div>
  )
}