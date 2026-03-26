import { cards, CATEGORIES } from './cards'
import { Card } from '@/types/sound-game'

export function getRandomCategory(): string {
  const index = Math.floor(Math.random() * CATEGORIES.length)
  return CATEGORIES[index]
}

export function getRandomCard(category: string, usedCardIds: string[]): Card {
  const categoryCards = cards.filter((c) => c.category === category)
  const available = categoryCards.filter((c) => !usedCardIds.includes(c.id))

  // Si se agotaron las cartas de la categoría, reciclar
  const pool = available.length > 0 ? available : categoryCards

  const index = Math.floor(Math.random() * pool.length)
  return pool[index]
}