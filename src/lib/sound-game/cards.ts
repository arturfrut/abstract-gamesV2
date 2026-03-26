import { Card } from '@/types/sound-game'

export const cards: Card[] = [
  // Animales
  { id: 'a1', text: 'perro ladrando', category: 'Animales', difficulty: 1 },
  { id: 'a2', text: 'gato maullando', category: 'Animales', difficulty: 1 },
  { id: 'a3', text: 'león rugiendo', category: 'Animales', difficulty: 2 },
  { id: 'a4', text: 'vaca mugiendo', category: 'Animales', difficulty: 1 },
  { id: 'a5', text: 'mono gritando', category: 'Animales', difficulty: 2 },

  // Objetos
  { id: 'o1', text: 'teléfono sonando', category: 'Objetos', difficulty: 1 },
  { id: 'o2', text: 'vidrio rompiéndose', category: 'Objetos', difficulty: 2 },
  { id: 'o3', text: 'motor arrancando', category: 'Objetos', difficulty: 2 },
  { id: 'o4', text: 'campana tañendo', category: 'Objetos', difficulty: 1 },
  { id: 'o5', text: 'reloj de péndulo', category: 'Objetos', difficulty: 3 },

  // Acciones
  { id: 'ac1', text: 'persona corriendo', category: 'Acciones', difficulty: 2 },
  { id: 'ac2', text: 'alguien estornudando', category: 'Acciones', difficulty: 1 },
  { id: 'ac3', text: 'persona susurrando', category: 'Acciones', difficulty: 2 },
  { id: 'ac4', text: 'alguien masticando', category: 'Acciones', difficulty: 1 },
  { id: 'ac5', text: 'alguien escondiéndose', category: 'Acciones', difficulty: 3 },

  // Profesiones
  { id: 'p1', text: 'doctor atendiendo', category: 'Profesiones', difficulty: 1 },
  { id: 'p2', text: 'bombero apagando fuego', category: 'Profesiones', difficulty: 2 },
  { id: 'p3', text: 'carpintero serrando', category: 'Profesiones', difficulty: 2 },
  { id: 'p4', text: 'cocinero batiendo huevos', category: 'Profesiones', difficulty: 1 },
  { id: 'p5', text: 'mecánico reparando', category: 'Profesiones', difficulty: 3 },

  // Naturaleza
  { id: 'n1', text: 'lluvia fuerte', category: 'Naturaleza', difficulty: 1 },
  { id: 'n2', text: 'viento fuerte soplando', category: 'Naturaleza', difficulty: 2 },
  { id: 'n3', text: 'río corriendo', category: 'Naturaleza', difficulty: 2 },
  { id: 'n4', text: 'tormenta acercándose', category: 'Naturaleza', difficulty: 3 },
  { id: 'n5', text: 'volcán en erupción', category: 'Naturaleza', difficulty: 3 },
]

export const CATEGORIES = ['Animales', 'Objetos', 'Acciones', 'Profesiones', 'Naturaleza'] as const
export type Category = typeof CATEGORIES[number]