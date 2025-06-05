import { mockPosts } from "./mock-data"

export async function getDatabase() {
  // Return mock data instead of making API calls
  return mockPosts.map((post) => ({
    id: post.id,
    properties: {
      Title: { title: [{ plain_text: post.title }] },
      Slug: { rich_text: [{ plain_text: post.slug }] },
      Published: { date: { start: post.published } },
      Excerpt: { rich_text: [{ plain_text: post.excerpt }] },
    },
  }))
}

export async function getPage(pageId: string) {
  const post = mockPosts.find((post) => post.id === pageId)
  if (!post) return null

  return {
    id: post.id,
    properties: {
      Title: { title: [{ plain_text: post.title }] },
      Slug: { rich_text: [{ plain_text: post.slug }] },
      Published: { date: { start: post.published } },
      Excerpt: { rich_text: [{ plain_text: post.excerpt }] },
    },
  }
}

export async function getBlocks(blockId: string) {
  const post = mockPosts.find((post) => post.id === blockId)
  return post ? post.content : ""
}

export async function getAllPosts() {
  const database = await getDatabase()

  return Promise.all(
    database.map(async (page: any) => {
      const title = page.properties.Title?.title[0]?.plain_text || "Untitled"
      const slug = page.properties.Slug?.rich_text[0]?.plain_text || page.id
      const published = page.properties.Published?.date?.start || null
      const excerpt = page.properties.Excerpt?.rich_text[0]?.plain_text || ""

      return {
        id: page.id,
        title,
        slug,
        published,
        excerpt,
      }
    }),
  )
}

export async function getPostBySlug(slug: string) {
  const mockPost = mockPosts.find((post) => post.slug === slug)

  if (!mockPost) {
    throw new Error(`No post found for slug: ${slug}`)
  }

  return {
    id: mockPost.id,
    title: mockPost.title,
    slug: mockPost.slug,
    published: mockPost.published,
    content: mockPost.content,
  }
}
