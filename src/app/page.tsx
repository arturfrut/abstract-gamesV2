import Link from 'next/link'

const sections = [
  {
    title: 'Juegos Abstractos',
    description: 'Juegos clásicos de tablero para jugar en persona. La app provee las instrucciones.',
    href: '/abstract',
    emoji: '♟️',
    count: '1 juego',
  },
  {
    title: 'Juegos con Celular',
    description: 'Juegos grupales que se juegan usando el celular como soporte.',
    href: '/games',
    emoji: '📱',
    count: '1 juego',
  },
  {
    title: 'Próximamente',
    description: 'Juegos multiplayer online y más. En desarrollo.',
    href: '/upcoming',
    emoji: '🚀',
    count: '3 juegos',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 pt-4">
        <h1 className="text-4xl font-bold tracking-tight">Abstract Games</h1>
        <p className="text-muted-foreground">Juegos para jugar con amigos</p>
      </div>

      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block rounded-xl border border-border bg-card p-6 hover:border-brand-blue transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4 items-start">
                <span className="text-3xl">{section.emoji}</span>
                <div>
                  <h2 className="font-bold text-xl">{section.title}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{section.description}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground shrink-0 mt-1">{section.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}