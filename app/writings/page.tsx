import { getAllPosts } from "@/lib/notion"
import Link from "next/link"

export default async function WritingsPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Escritos</h1>

      <p className="mb-8 text-lg">
        Una colección de poemas, relatos y pensamientos que reflejan la crudeza de la vida, el amor, la soledad y esos
        pequeños momentos de belleza en medio del caos.
      </p>

      <hr className="my-8 border-border" />

      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/writings/${post.slug}`} className="no-underline hover:text-muted-foreground">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-3">
              {post.published ? new Date(post.published).toLocaleDateString() : "Sin fecha"}
            </p>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
