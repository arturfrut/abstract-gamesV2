'use client'

import { useEffect } from 'react'

interface TimerProps {
  timeLeft: number
  isPlaying: boolean
  onTick: () => void
  onTimeUp: () => void
}

export function Timer({ timeLeft, isPlaying, onTick, onTimeUp }: TimerProps) {
  useEffect(() => {
    if (!isPlaying) return

    if (timeLeft <= 0) {
      onTimeUp()
      return
    }

    const interval = setInterval(() => {
      onTick()
    }, 1000)

    return () => clearInterval(interval)
  }, [timeLeft, isPlaying])

  const isUrgent = timeLeft <= 10

  return (
    <div className={`text-7xl font-bold tabular-nums transition-colors ${
      isUrgent ? 'text-brand-red' : 'text-foreground'
    }`}>
      {timeLeft}
    </div>
  )
}