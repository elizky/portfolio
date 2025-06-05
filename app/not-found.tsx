import Link from "next/link"

export default function NotFound() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="mb-8">La página que buscas no existe o ha sido movida.</p>
      <Link href="/" className="text-primary hover:text-muted-foreground transition-colors">
        Volver al inicio →
      </Link>
    </div>
  )
}
