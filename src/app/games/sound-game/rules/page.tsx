import Link from 'next/link'

export default function SoundGameRulesPage() {
  return (
    <div className="flex flex-col gap-8 pt-4">

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Cómo jugar</h1>
        <p className="text-muted-foreground">That Sound Game</p>
      </div>

      <div className="flex flex-col gap-6">

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Objetivo</h2>
          <p className="text-muted-foreground">
            Acumular más puntos que los otros equipos al completar todas las rondas.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">El dado</h2>
          <p className="text-muted-foreground">
            Al inicio de cada turno, el equipo activo tira el dado. El resultado define
            la categoría de la carta: Animales, Objetos, Acciones, Profesiones o Naturaleza.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Las cartas</h2>
          <p className="text-muted-foreground">
            Cada carta tiene una palabra o situación que el jugador activo debe representar
            usando únicamente sonidos. Está prohibido hablar y gesticular.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Puntos</h2>
          <p className="text-muted-foreground">
            Cada carta vale según su dificultad:
          </p>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card">
              <span className="text-yellow-400">★☆☆</span>
              <span className="text-muted-foreground text-sm">Fácil — 1 punto</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card">
              <span className="text-yellow-400">★★☆</span>
              <span className="text-muted-foreground text-sm">Media — 2 puntos</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card">
              <span className="text-yellow-400">★★★</span>
              <span className="text-muted-foreground text-sm">Difícil — 3 puntos</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Skip</h2>
          <p className="text-muted-foreground">
            Si una carta es muy difícil, se puede saltear sin penalidad. No suma puntos
            pero tampoco resta.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Turnos</h2>
          <p className="text-muted-foreground">
            Cada equipo juega una ronda por turno. Cuando se acaba el tiempo, pasa
            el turno al siguiente equipo. Se alternan hasta que todos completen
            la cantidad de rondas definida al inicio.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Fin del juego</h2>
          <p className="text-muted-foreground">
            Cuando todos los equipos completaron todas sus rondas, se muestra
            el puntaje final. Gana el equipo con más puntos.
          </p>
        </section>

      </div>

      <Link
        href="/games/sound-game"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Volver al juego
      </Link>

    </div>
  )
}