export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contacto</h1>

      <p className="mb-8 text-lg">
        Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes en ponerte en contacto conmigo.
      </p>

      <hr className="my-8 border-border" />

      <div className="space-y-4">
        <p>
          <span className="text-muted-foreground">Email:</span> tu@email.com
        </p>
        <p>
          <span className="text-muted-foreground">Twitter:</span> @tuusuario
        </p>
        <p>
          <span className="text-muted-foreground">GitHub:</span> github.com/tuusuario
        </p>
      </div>

      <hr className="my-8 border-border" />

      <p className="text-sm text-muted-foreground">Actualmente disponible para proyectos freelance y colaboraciones.</p>
    </div>
  )
}
