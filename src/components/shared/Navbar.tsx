'use client'

import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-lg tracking-tight hover:text-brand-red transition-colors"
        >
          Abstract Games
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}