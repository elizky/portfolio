import { Calendar } from 'lucide-react';

export default function RandomPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Random</h1>

      <p className="mb-8 text-lg">
        Una colección de cosas que me interesan: artículos que escribo en
        Medium, playlists de Spotify para diferentes momentos, y otros
        contenidos que vale la pena compartir.
      </p>

      <hr className="my-8 border-border" />

      <div className="font-mono text-sm leading-relaxed mb-8">
        <div className="space-y-1">
          <div className="text-muted-foreground">random/</div>
          <div className="ml-4">
            <div className="text-muted-foreground">
              ├── 📝{' '}
              <a
                href="https://medium.com/@tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors no-underline"
              >
                medium-articles.md
              </a>
            </div>
            <div className="ml-4 text-xs text-muted-foreground pl-4">
              Artículos sobre desarrollo y vida
            </div>
          </div>
          <div className="ml-4">
            <div className="text-muted-foreground">
              ├── 🎵{' '}
              <a
                href="https://open.spotify.com/user/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors no-underline"
              >
                spotify-playlists.m3u
              </a>
            </div>
            <div className="ml-4 text-xs text-muted-foreground pl-4">
              Playlists para programar y escribir
            </div>
          </div>
          <div className="ml-4">
            <div className="text-muted-foreground">
              ├── ⚙️{' '}
              <a
                href="https://github.com/tuusuario/dotfiles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors no-underline"
              >
                dotfiles.sh
              </a>
            </div>
            <div className="ml-4 text-xs text-muted-foreground pl-4">
              Configuración de mi entorno de desarrollo
            </div>
          </div>
          <div className="ml-4">
            <div className="text-muted-foreground">
              └── 📚{' '}
              <a
                href="https://www.goodreads.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors no-underline"
              >
                reading-list.json
              </a>
            </div>
            <div className="ml-4 text-xs text-muted-foreground pl-4">
              Libros que han influenciado mi escritura
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 border-border" />

      <h2 className="text-2xl font-bold mb-6">Artículos Destacados</h2>

      <ul className="space-y-8 mb-12">
        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://medium.com/@tuusuario/el-minimalismo-en-el-desarrollo-web"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              El Minimalismo en el Desarrollo Web
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Calendar size={14} />
            15 de Diciembre, 2023
          </p>
          <p>
            Una reflexión sobre cómo aplicar principios minimalistas al
            desarrollo web, eliminando lo innecesario para enfocarse en lo que
            realmente importa: la experiencia del usuario.
          </p>
        </li>

        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://medium.com/@tuusuario/de-musico-a-programador"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              De Músico a Programador: Una Transición Inesperada
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Calendar size={14} />3 de Noviembre, 2023
          </p>
          <p>
            Mi experiencia personal cambiando de la música callejera al
            desarrollo web durante la pandemia, y cómo ambas disciplinas
            comparten más de lo que pensaba.
          </p>
        </li>

        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://medium.com/@tuusuario/escribir-codigo-como-poesia"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              Escribir Código Como Poesía
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Calendar size={14} />
            22 de Octubre, 2023
          </p>
          <p>
            Explorando las similitudes entre escribir código limpio y escribir
            poesía: ambos requieren precisión, economía de palabras y un
            profundo entendimiento del ritmo.
          </p>
        </li>
      </ul>

      <hr className="my-8 border-border" />

      <h2 className="text-2xl font-bold mb-6">Playlists Favoritas</h2>

      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://open.spotify.com/playlist/coding-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              🎧 Coding Flow
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            42 canciones • 2h 38min
          </p>
          <p>
            Música instrumental y ambient para esas sesiones largas de
            programación. Sin letras que distraigan, solo ritmos que ayudan a
            mantener el foco.
          </p>
        </li>

        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://open.spotify.com/playlist/escritura-nocturna"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              🌙 Escritura Nocturna
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            28 canciones • 1h 52min
          </p>
          <p>
            Jazz, blues y rock alternativo para esas noches de escritura. Música
            que acompaña la melancolía y la introspección.
          </p>
        </li>

        <li>
          <h3 className="text-xl font-bold mb-2">
            <a
              href="https://open.spotify.com/playlist/bar-de-mala-muerte"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-muted-foreground"
            >
              🍺 Bar de Mala Muerte
            </a>
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            35 canciones • 2h 15min
          </p>
          <p>
            Tom Waits, Leonard Cohen, Nick Cave y otros poetas de la noche.
            Música para acompañar un whisky y una conversación profunda.
          </p>
        </li>
      </ul>

      <hr className="my-8 border-border" />

      <div className="text-sm text-muted-foreground space-y-2">
        <p>$ find random/ -type f | wc -l</p>
        <p>4 files found</p>
      </div>
    </div>
  );
}
