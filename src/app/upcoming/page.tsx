const upcomingGames = [
  {
    id: 'sound-game-online',
    name: 'Juego de Sonidos Online',
    description: 'La versión multijugador en tiempo real del juego de sonidos.',
  },
  {
    id: 'word-guess',
    name: 'Adivina la Palabra',
    description: 'Trivia colaborativa online. Un jugador da pistas, el resto adivina.',
  },
  {
    id: 'trivia-multiplayer',
    name: 'Trivia Multiplayer',
    description: 'Preguntas y respuestas en tiempo real contra tus amigos.',
  },
]

export default function UpcomingPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 pt-4">
        <h1 className="text-3xl font-bold tracking-tight">Próximamente</h1>
        <p className="text-muted-foreground">
          Juegos multiplayer online en desarrollo.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {upcomingGames.map((game) => (
          <div
            key={game.id}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-lg">{game.name}</h2>
                <p className="text-muted-foreground text-sm mt-1">{game.description}</p>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground shrink-0">
                Próximamente
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}