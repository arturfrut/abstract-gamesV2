'use client'

import { useReducer } from 'react'
import { gameReducer, initialState } from '@/lib/sound-game/reducer'
import { SetupScreen } from '@/components/sound-game/SetupScreen'
import { RollingScreen } from '@/components/sound-game/RollingScreen'
import { PlayingScreen } from '@/components/sound-game/PlayingScreen'
import { TurnEndScreen } from '@/components/sound-game/TurnEndScreen'
import { ResultsScreen } from '@/components/sound-game/ResultsScreen'
import { Team } from '@/types/sound-game'

export default function SoundGamePage() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  function handleStart(teams: Team[], timer: number, rounds: number) {
    dispatch({ type: 'START_GAME', teams, timer, rounds })
  }

  return (
    <>
      {state.phase === 'setup' && (
        <SetupScreen onStart={handleStart} />
      )}

      {state.phase === 'rolling' && (
        <RollingScreen
          team={state.teams[state.currentTeamIndex]}
          category={state.currentCategory}
          onRoll={() => dispatch({ type: 'ROLL_DICE' })}
          onContinue={() => dispatch({ type: 'START_TURN' })}
        />
      )}

      {state.phase === 'playing' && (
        <PlayingScreen
          state={state}
          onCorrect={() => dispatch({ type: 'CORRECT' })}
          onSkip={() => dispatch({ type: 'SKIP' })}
          onTick={() => dispatch({ type: 'TICK' })}
          onTimeUp={() => dispatch({ type: 'TIME_UP' })}
        />
      )}

      {state.phase === 'turn-end' && (
        <TurnEndScreen
          state={state}
          onNext={() => dispatch({ type: 'NEXT_TURN' })}
        />
      )}

      {state.phase === 'results' && (
        <ResultsScreen
          state={state}
          onRestart={() => dispatch({ type: 'RESTART' })}
        />
      )}
    </>
  )
}