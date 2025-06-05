import { getPostBySlug, getAllPosts } from "@/lib/notion"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)

    return {
      title: `${post.title} | My Blog`,
      description: post.content.substring(0, 160).replace(/#/g, "").trim(),
    }
  } catch (error) {
    return {
      title: "Post Not Found | My Blog",
      description: "The requested post could not be found.",
    }
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const post = await getPostBySlug(params.slug)

    // Convert markdown to HTML (simple version)
    const htmlContent = post.content
      .replace(/^# (.*$)/gm, "<h1>$1</h1>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      .replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>")
      .replace(/\*(.*)\*/gm, "<em>$1</em>")
      .replace(/\n/gm, "<br />")
      .replace(/```(.+?)```/gs, (match, p1) => {
        return `<pre><code>${p1.replace(/^(.*)$/gm, "$1\n")}</code></pre>`
      })

    return (
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

        {post.published && (
          <p className="text-muted-foreground mb-8">{new Date(post.published).toLocaleDateString()}</p>
        )}

        <div
          className="prose prose-stone dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    )
  } catch (error) {
    notFound()
  }
}
