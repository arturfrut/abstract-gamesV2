'use client'

import { useState } from 'react'
import { Team, Difficulty } from '@/types/sound-game'
import Link from 'next/link'

interface SetupScreenProps {
  onStart: (teams: Team[], timer: number, rounds: number, maxDifficulty: Difficulty) => void
}

const TIMER_OPTIONS = [30, 60, 90]
const ROUNDS_OPTIONS = [1, 2, 3, 5]

export function SetupScreen({ onStart }: SetupScreenProps) {
  const [teams, setTeams] = useState<Team[]>([
    { id: '1', name: 'Equipo 1', score: 0 },
    { id: '2', name: 'Equipo 2', score: 0 },
  ])
  const [timer, setTimer] = useState(60)
  const [rounds, setRounds] = useState(3)
  const [maxDifficulty, setMaxDifficulty] = useState<Difficulty>(3)

  function addTeam() {
    if (teams.length >= 6) return
    const id = String(teams.length + 1)
    setTeams([...teams, { id, name: `Equipo ${teams.length + 1}`, score: 0 }])
  }

  function removeTeam(id: string) {
    if (teams.length <= 2) return
    setTeams(teams.filter((t) => t.id !== id))
  }

  function updateTeamName(id: string, name: string) {
    setTeams(teams.map((t) => (t.id === id ? { ...t, name } : t)))
  }

  function handleStart() {
    if (teams.length < 2) return
    onStart(teams, timer, rounds, maxDifficulty)
  }

  return (
    <div className="flex flex-col gap-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">That Sound Game</h1>
        <p className="text-muted-foreground mt-1">Configurá la partida antes de empezar</p>
        <Link
          href="/games/sound-game/rules"
          className="text-sm text-brand-blue hover:opacity-80 transition-opacity"
        >
          ¿Cómo se juega? →
        </Link>
      </div>

      {/* Equipos */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Equipos</h2>
        <div className="flex flex-col gap-3">
          {teams.map((team) => (
            <div key={team.id} className="flex gap-3 items-center">
              <input
                type="text"
                value={team.name}
                onChange={(e) => updateTeamName(team.id, e.target.value)}
                className="flex-1 rounded-xl border border-border bg-background px-4 h-12 text-foreground focus:outline-none focus:border-brand-blue transition-colors"
              />
              <button
                onClick={() => removeTeam(team.id)}
                disabled={teams.length <= 2}
                className="h-12 w-12 rounded-xl border border-border text-muted-foreground hover:text-brand-red hover:border-brand-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        {teams.length < 6 && (
          <button
            onClick={addTeam}
            className="h-12 rounded-xl border border-dashed border-border text-muted-foreground hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            + Agregar equipo
          </button>
        )}
      </div>

      {/* Timer */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Tiempo por turno</h2>
        <div className="flex gap-3">
          {TIMER_OPTIONS.map((t) => (
            <button
              key={t}
              onClick={() => setTimer(t)}
              className={`flex-1 h-12 rounded-xl border font-medium transition-colors ${
                timer === t
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-border text-muted-foreground hover:border-brand-blue'
              }`}
            >
              {t}s
            </button>
          ))}
        </div>
      </div>

      {/* Rondas */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Rondas por equipo</h2>
        <div className="flex gap-3">
          {ROUNDS_OPTIONS.map((r) => (
            <button
              key={r}
              onClick={() => setRounds(r)}
              className={`flex-1 h-12 rounded-xl border font-medium transition-colors ${
                rounds === r
                  ? 'border-brand-blue bg-brand-blue text-white'
                  : 'border-border text-muted-foreground hover:border-brand-blue'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Dificultad */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Dificultad</h2>
          <span className="text-sm text-muted-foreground">
            {maxDifficulty === 1 ? 'Solo fáciles' : maxDifficulty === 2 ? 'Hasta media' : 'Todas'}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="range"
            min={1}
            max={3}
            step={1}
            value={maxDifficulty}
            onChange={(e) => setMaxDifficulty(Number(e.target.value) as Difficulty)}
            className="w-full accent-brand-blue"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>⭐ Fácil</span>
            <span>⭐⭐ Media</span>
            <span>⭐⭐⭐ Difícil</span>
          </div>
        </div>
      </div>

      {/* Botón iniciar */}
      <button
        onClick={handleStart}
        disabled={teams.length < 2}
        className="h-14 rounded-xl bg-brand-blue text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Comenzar juego
      </button>
    </div>
  )
}