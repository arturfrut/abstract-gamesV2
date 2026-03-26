import { Team } from '@/types/sound-game'

interface ScoreboardProps {
  teams: Team[]
  currentTeamIndex: number
}

export function Scoreboard({ teams, currentTeamIndex }: ScoreboardProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      {teams.map((team, index) => (
        <div
          key={team.id}
          className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
            index === currentTeamIndex
              ? 'border-brand-blue bg-card'
              : 'border-border bg-card'
          }`}
        >
          <div className="flex items-center gap-2">
            {index === currentTeamIndex && (
              <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
            )}
            {index !== currentTeamIndex && (
              <span className="w-2 h-2 rounded-full bg-transparent shrink-0" />
            )}
            <span className="font-medium text-sm">{team.name}</span>
          </div>
          <span className="font-bold text-sm">{team.score} pts</span>
        </div>
      ))}
    </div>
  )
}