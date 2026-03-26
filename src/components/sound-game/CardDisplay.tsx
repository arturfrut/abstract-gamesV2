import { Card } from '@/types/sound-game'
import { DifficultyBadge } from './DifficultyBadge'

interface CardDisplayProps {
  card: Card
}

export function CardDisplay({ card }: CardDisplayProps) {
  return (
    <div className="w-full rounded-xl border border-border bg-card p-8 flex flex-col items-center gap-4 text-center">
      <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
        {card.category}
      </span>
      <p className="text-3xl font-bold leading-tight">{card.text}</p>
      <DifficultyBadge difficulty={card.difficulty} />
    </div>
  )
}