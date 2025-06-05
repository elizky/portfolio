import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Blog Minimalista | Portfolio",
  description: "Un blog minimalista desarrollado con Next.js y Tailwind CSS",
}

export default function BlogMinimalistaPage() {
  return (
    <article>
      <Link
        href="/projects"
        className="flex items-center gap-1 mb-8 text-sm no-underline text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Volver a proyectos
      </Link>

      <h1 className="text-3xl font-bold mb-2">Blog Minimalista</h1>
      <p className="text-muted-foreground mb-8">2023</p>

      <hr className="my-8 border-border" />

      <h2 className="text-2xl font-bold mb-4">Descripción</h2>
      <p className="mb-6">
        Un blog minimalista desarrollado con Next.js y Tailwind CSS, diseñado para mostrar contenido de escritura
        creativa con un enfoque en la tipografía y la legibilidad. El proyecto prioriza la simplicidad y la experiencia
        de lectura por encima de elementos decorativos.
      </p>

      <h2 className="text-2xl font-bold mb-4">Características</h2>
      <ul className="mb-6 space-y-2">
        <li>• Diseño completamente minimalista sin elementos decorativos</li>
        <li>• Modo oscuro permanente con paleta de colores personalizada</li>
        <li>• Tipografía Inconsolata para una experiencia de lectura única</li>
        <li>• Navegación mediante drawer desplegable</li>
        <li>• Responsive design para todos los dispositivos</li>
        <li>• Optimizado para SEO y rendimiento</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Tecnologías</h2>
      <ul className="mb-6 space-y-2">
        <li>• Next.js 14 con App Router</li>
        <li>• TypeScript para type safety</li>
        <li>• Tailwind CSS para estilos</li>
        <li>• Lucide React para iconografía</li>
        <li>• Vercel para deployment</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Proceso de Desarrollo</h2>
      <p className="mb-4">
        El desarrollo comenzó con la premisa de crear la experiencia de lectura más limpia posible. Cada decisión de
        diseño se tomó con el objetivo de eliminar distracciones y enfocar la atención en el contenido.
      </p>
      <p className="mb-4">
        La elección de la tipografía Inconsolata no fue casual: su carácter monoespaciado aporta una sensación de
        autenticidad y honestidad que complementa el estilo de escritura directo y sin adornos del contenido.
      </p>
      <p className="mb-6">
        El drawer lateral permite acceso rápido a toda la navegación sin ocupar espacio permanente en la interfaz,
        manteniendo el foco en el contenido principal.
      </p>

      <h2 className="text-2xl font-bold mb-4">Resultados</h2>
      <p className="mb-4">
        El proyecto logró crear una experiencia de lectura inmersiva y sin distracciones. Los tiempos de carga son
        mínimos y la navegación es intuitiva tanto en desktop como en mobile.
      </p>
      <p className="mb-6">
        La implementación del modo oscuro permanente con la paleta de colores personalizada (#EEE5DA y #262424) crea una
        atmósfera que complementa perfectamente el tono del contenido literario.
      </p>

      <hr className="my-8 border-border" />

      <h2 className="text-2xl font-bold mb-4">Enlaces</h2>
      <ul className="space-y-2">
        <li>
          <a
            href="#"
            className="text-primary hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto en vivo →
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-primary hover:text-muted-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código en GitHub →
          </a>
        </li>
      </ul>
    </article>
  )
}
