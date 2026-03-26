'use client'

import { useState } from 'react'
import { Team } from '@/types/sound-game'

interface RollingScreenProps {
  team: Team
  onContinue: () => void
  onRoll: () => void
  category: string | null
}

const CATEGORY_EMOJIS: Record<string, string> = {
  Animales: '🐾',
  Objetos: '📦',
  Acciones: '🏃',
  Profesiones: '👷',
  Naturaleza: '🌿',
}

export function RollingScreen({ team, onContinue, onRoll, category }: RollingScreenProps) {
  const [isRolling, setIsRolling] = useState(false)

  function handleRoll() {
    if (isRolling || category) return
    setIsRolling(true)
    setTimeout(() => {
      onRoll()
      setIsRolling(false)
    }, 800)
  }

  return (
    <div className="flex flex-col items-center gap-8 pt-8 text-center">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-lg">Turno de</p>
        <h2 className="text-4xl font-bold">{team.name}</h2>
        <p className="text-muted-foreground">Puntaje: {team.score} pts</p>
      </div>

      {!category ? (
        <button
          onClick={handleRoll}
          disabled={isRolling}
          className="w-full h-16 rounded-xl bg-brand-blue text-white font-bold text-xl hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isRolling ? '🎲 ...' : '🎲 Tirar dado'}
        </button>
      ) : (
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2 w-full rounded-xl border border-border bg-card p-6">
            <span className="text-5xl">{CATEGORY_EMOJIS[category] ?? '🎯'}</span>
            <p className="text-muted-foreground text-sm mt-2">Categoría</p>
            <p className="text-3xl font-bold">{category}</p>
          </div>
          <button
            onClick={onContinue}
            className="w-full h-14 rounded-xl bg-brand-blue text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Ver carta →
          </button>
        </div>
      )}
    </div>
  )
}