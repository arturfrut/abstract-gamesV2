export type GameSection = 'abstract' | 'games' | 'upcoming'

export interface GameMeta {
  id: string
  name: string
  description: string
  section: GameSection
  route: string
  available: boolean
  playerCount?: string
  duration?: string
}