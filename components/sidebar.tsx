import Link from "next/link"

interface Post {
  id: string
  title: string
  slug: string
  published: string | null
  excerpt: string
}

interface SidebarProps {
  posts: Post[]
}

export default function Sidebar({ posts }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 lg:w-72 border-r border-border bg-card md:h-screen md:sticky md:top-0 overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <Link href="/" className="text-xl font-bold no-underline">
            Mi Blog
          </Link>
        </div>

        <div className="mb-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">Escritos</h2>
        </div>

        <nav>
          <ul className="space-y-2">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/posts/${post.slug}`}
                  className="block py-2 px-3 rounded-md hover:bg-accent transition-colors no-underline text-foreground hover:text-foreground"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
