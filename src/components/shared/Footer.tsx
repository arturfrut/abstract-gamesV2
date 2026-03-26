export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-center">
        <p className="text-xs text-muted-foreground">
          Abstract Games © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}