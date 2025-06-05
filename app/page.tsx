import { FileTree } from '@/components/file-tree';

export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Soy Carlos</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Escritor y desarrollador desde Buenos Aires, Argentina.
      </p>

      <hr className="my-8 border-border" />

      <div className="space-y-6 mb-12">
        <p>
          Hola, soy Carlos, pero cuando las cosas se ponen serias, mi madre me
          llama por mi nombre completo. He sido desarrollador desde la pandemia,
          pero antes de eso, pasé bastante tiempo como escritor y músico
          callejero.
        </p>

        <p>
          Me gusta lo que hago: crear soluciones digitales que hagan la vida de
          las personas más fácil. Siempre estoy buscando mejorar, aprender
          nuevas tecnologías y aplicar lo que sé a proyectos que me apasionan,
          como este portfolio minimalista que combina mi amor por la escritura
          con el desarrollo web.
        </p>

        <p>
          Cuando no estoy programando, probablemente me encuentres con una
          cerveza en la mano, escribiendo poemas sobre la vida urbana, o en
          algún bar de mala muerte buscando inspiración para mi próximo relato.
          Para mí, no hay nada mejor que una buena historia contada sin adornos.
        </p>
      </div>

      <hr className="my-8 border-border" />

      <h2 className="text-2xl font-bold mb-6">Navegación</h2>

      <FileTree initialPath="/" />

      <hr className="my-8 border-border" />

      <div className="text-sm text-muted-foreground space-y-2">
        <p>$ tree carlos/ --depth=2</p>
        <p>5 directories, 15 files</p>
      </div>
    </div>
  );
}
