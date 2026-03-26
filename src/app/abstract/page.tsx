import { GameCard } from '@/components/shared/Gamecard'
import { GameMeta } from '@/types'

const abstractGames: GameMeta[] = [
  {
    id: 'tateti',
    name: 'Ta-Te-Ti',
    description: 'El clásico juego de tres en línea. Simple, rápido y para dos jugadores.',
    section: 'abstract',
    route: '/abstract/tateti',
    available: true,
    playerCount: '2 jugadores',
    duration: '5 min',
  },
]

export default function AbstractPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Juegos Abstractos</h1>
        <p className="text-muted-foreground">
          Juegos clásicos de tablero. La app provee las instrucciones — el juego es en persona.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {abstractGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}