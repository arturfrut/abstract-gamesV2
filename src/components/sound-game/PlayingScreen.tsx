'use client'

import { GameState } from '@/types/sound-game'
import { Timer } from './Timer'
import { CardDisplay } from './CardDisplay'
import { Scoreboard } from './Scoreboard'

interface PlayingScreenProps {
  state: GameState
  onCorrect: () => void
  onSkip: () => void
  onTick: () => void
  onTimeUp: () => void
}

export function PlayingScreen({ state, onCorrect, onSkip, onTick, onTimeUp }: PlayingScreenProps) {
  if (!state.currentCard) return null

  return (
    <div className="flex flex-col items-center gap-6 pt-4">

      <Timer
        timeLeft={state.timeLeft}
        isPlaying={state.isPlaying}
        onTick={onTick}
        onTimeUp={onTimeUp}
      />

      <CardDisplay card={state.currentCard} />

      <div className="flex gap-4 w-full">
        <button
          onClick={onSkip}
          className="flex-1 h-14 rounded-xl border border-border text-muted-foreground font-bold text-lg hover:border-brand-red hover:text-brand-red transition-colors"
        >
          ⏭ Skip
        </button>
        <button
          onClick={onCorrect}
          className="flex-1 h-14 rounded-xl bg-green-500 text-white font-bold text-lg hover:opacity-90 transition-opacity"
        >
          ✓ Correcto
        </button>
      </div>

      <Scoreboard
        teams={state.teams}
        currentTeamIndex={state.currentTeamIndex}
      />

    </div>
  )
}