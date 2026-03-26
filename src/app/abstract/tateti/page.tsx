import Link from 'next/link'

export default function TatetiPage() {
  return (
    <div className="flex flex-col gap-8 pt-4">

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Ta-Te-Ti</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>👥 2 jugadores</span>
          <span>⏱ 5 min</span>
          <span>🖊️ Papel y lápiz</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Preparación</h2>
          <p className="text-muted-foreground">
            Dibujá una grilla de 3×3 en un papel. Son dos líneas horizontales y dos verticales, formando 9 celdas.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Reglas</h2>
          <ul className="flex flex-col gap-2 text-muted-foreground">
            <li>• Un jugador es X y el otro es O.</li>
            <li>• X empieza. Se turnan colocando su símbolo en una celda vacía.</li>
            <li>• No se puede pisar una celda ya ocupada.</li>
          </ul>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Cómo ganar</h2>
          <p className="text-muted-foreground">
            Ganás si lográs tres de tus símbolos en línea: horizontal, vertical o diagonal.
            Si el tablero se llena sin ganador, es empate.
          </p>
        </section>

      </div>

      <Link
        href="/abstract"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Volver
      </Link>

    </div>
  )
}