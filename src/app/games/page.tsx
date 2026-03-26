import { GameCard } from '@/components/shared/Gamecard'
import { GameMeta } from '@/types'

const games: GameMeta[] = [
  {
    id: 'sound-game',
    name: 'That Sound Game',
    description: 'Representá palabras y situaciones usando solo sonidos. Tu equipo tiene que adivinar.',
    section: 'games',
    route: '/games/sound-game',
    available: true,
    playerCount: '4+ jugadores',
    duration: '20-40 min',
  },
]

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Juegos con Celular</h1>
        <p className="text-muted-foreground">
          Juegos grupales que se juegan usando el celular como soporte.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}