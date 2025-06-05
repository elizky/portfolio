import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Proyectos</h1>

      <p className="mb-8 text-lg">
        Una selección de mis trabajos más destacados. Cada proyecto refleja mi enfoque minimalista y atención al
        detalle.
      </p>

      <hr className="my-8 border-border" />

      <ul className="space-y-12">
        <li>
          <h2 className="text-2xl font-bold mb-2">
            <Link href="/projects/blog-minimalista" className="no-underline hover:text-muted-foreground">
              Blog Minimalista
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">2023</p>
          <p className="mb-4">
            Un blog minimalista desarrollado con Next.js y Tailwind CSS, diseñado para mostrar contenido de escritura
            creativa con un enfoque en la tipografía y la legibilidad. El proyecto prioriza la simplicidad y la
            experiencia de lectura por encima de elementos decorativos.
          </p>
          <Link
            href="/projects/blog-minimalista"
            className="text-primary hover:text-muted-foreground transition-colors inline-block"
          >
            Ver detalles →
          </Link>
        </li>

        <hr className="my-8 border-border" />

        <li>
          <h2 className="text-2xl font-bold mb-2">
            <Link href="/projects/proyecto-2" className="no-underline hover:text-muted-foreground">
              Proyecto 2
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">2022</p>
          <p className="mb-4">
            Una descripción detallada del proyecto, incluyendo los objetivos, tecnologías utilizadas y resultados
            obtenidos. Este proyecto fue desarrollado para explorar nuevas formas de interacción y diseño minimalista.
          </p>
          <Link
            href="/projects/proyecto-2"
            className="text-primary hover:text-muted-foreground transition-colors inline-block"
          >
            Ver detalles →
          </Link>
        </li>

        <hr className="my-8 border-border" />

        <li>
          <h2 className="text-2xl font-bold mb-2">
            <Link href="/projects/proyecto-3" className="no-underline hover:text-muted-foreground">
              Proyecto 3
            </Link>
          </h2>
          <p className="text-sm text-muted-foreground mb-4">2021</p>
          <p className="mb-4">
            Una descripción detallada del proyecto, incluyendo los objetivos, tecnologías utilizadas y resultados
            obtenidos. Este proyecto fue desarrollado para explorar nuevas formas de interacción y diseño minimalista.
          </p>
          <Link
            href="/projects/proyecto-3"
            className="text-primary hover:text-muted-foreground transition-colors inline-block"
          >
            Ver detalles →
          </Link>
        </li>
      </ul>
    </div>
  )
}
