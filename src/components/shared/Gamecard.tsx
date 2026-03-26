import Link from 'next/link'
import { GameMeta } from '@/types'

interface GameCardProps {
  game: GameMeta
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={game.route}
      className="block w-full rounded-xl border border-border bg-card p-5 hover:border-brand-blue transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-card-foreground">{game.name}</h3>
          <p className="text-muted-foreground text-sm mt-1">{game.description}</p>
          {(game.playerCount || game.duration) && (
            <div className="flex gap-3 mt-3">
              {game.playerCount && (
                <span className="text-xs text-muted-foreground">
                  👥 {game.playerCount}
                </span>
              )}
              {game.duration && (
                <span className="text-xs text-muted-foreground">
                  ⏱ {game.duration}
                </span>
              )}
            </div>
          )}
        </div>
        {!game.available && (
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground shrink-0">
            Próximamente
          </span>
        )}
      </div>
    </Link>
  )
}