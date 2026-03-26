import { Difficulty } from '@/types/sound-game'

interface DifficultyBadgeProps {
  difficulty: Difficulty
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const stars = Array.from({ length: 3 }, (_, i) => i < difficulty)

  return (
    <div className="flex items-center gap-1">
      {stars.map((filled, i) => (
        <span key={i} className={filled ? 'text-yellow-400' : 'text-muted'}>
          ★
        </span>
      ))}
      <span className="text-xs text-muted-foreground ml-1">
        {difficulty === 1 ? '1 punto' : `${difficulty} puntos`}
      </span>
    </div>
  )
}