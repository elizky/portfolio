"use client"

import { useState, useEffect } from "react"
import { ChevronRight, File, Folder } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the file type as specified
interface FileItem {
  name: string
  is_directory: boolean
  href?: string
  external?: boolean
}

// Extended type for our hierarchical structure
interface TreeNode extends FileItem {
  id: string
  children?: TreeNode[]
  path: string
  isLoading?: boolean
  isExpanded?: boolean
}

// Normalize path to ensure it starts with a slash and has no trailing slash
const normalizePath = (path: string): string => {
  if (!path) return "/"
  return path.startsWith("/") ? path : `/${path}`
}

// Get parent path from a given path
const getParentPath = (path: string): string => {
  const normalizedPath = normalizePath(path)
  if (normalizedPath === "/") return "/"

  const lastSlashIndex = normalizedPath.lastIndexOf("/")
  if (lastSlashIndex <= 0) return "/"

  return normalizedPath.substring(0, lastSlashIndex) || "/"
}

// Get path segments from a path (e.g., "/a/b/c" -> ["/", "/a", "/a/b", "/a/b/c"])
const getPathSegments = (path: string): string[] => {
  const normalizedPath = normalizePath(path)
  if (normalizedPath === "/") return ["/"]

  const segments = normalizedPath.split("/").filter(Boolean)
  return segments.reduce(
    (acc, segment, index) => {
      const previousPath = index === 0 ? "/" : acc[index]
      const currentPath = previousPath === "/" ? `/${segment}` : `${previousPath}/${segment}`
      return [...acc, currentPath]
    },
    ["/"],
  )
}

// Extract the name from a path
const getNameFromPath = (path: string): string => {
  const normalizedPath = normalizePath(path)
  if (normalizedPath === "/") return "/"

  const parts = normalizedPath.split("/").filter(Boolean)
  return parts[parts.length - 1]
}

// Portfolio file structure
const fetchFiles = async (path = "/"): Promise<FileItem[]> => {
  const normalizedPath = normalizePath(path)

  return new Promise((resolve) => {
    setTimeout(() => {
      if (normalizedPath === "/") {
        resolve([
          { name: "projects", is_directory: true, href: "/projects" },
          { name: "writings", is_directory: true, href: "/writings" },
          { name: "random", is_directory: true, href: "/random" },
          { name: "contact", is_directory: true, href: "/contact" },
          { name: "README.md", is_directory: false, href: "/cv.pdf", external: true },
        ])
      } else if (normalizedPath === "/projects") {
        resolve([
          { name: "blog-minimalista.md", is_directory: false, href: "/projects/blog-minimalista" },
          { name: "proyecto-2.md", is_directory: false, href: "/projects/proyecto-2" },
          { name: "proyecto-3.md", is_directory: false, href: "/projects/proyecto-3" },
        ])
      } else if (normalizedPath === "/writings") {
        resolve([
          { name: "el-ultimo-trago.txt", is_directory: false, href: "/writings/el-ultimo-trago" },
          { name: "rutina.txt", is_directory: false, href: "/writings/rutina" },
          { name: "la-mujer-del-vestido-rojo.txt", is_directory: false, href: "/writings/la-mujer-del-vestido-rojo" },
          { name: "pajaros-en-la-cabeza.txt", is_directory: false, href: "/writings/pajaros-en-la-cabeza" },
          { name: "carta-a-un-amor-perdido.txt", is_directory: false, href: "/writings/carta-a-un-amor-perdido" },
        ])
      } else if (normalizedPath === "/random") {
        resolve([
          { name: "medium-articles.md", is_directory: false, href: "https://medium.com/@tuusuario", external: true },
          {
            name: "spotify-playlists.m3u",
            is_directory: false,
            href: "https://open.spotify.com/user/tuusuario",
            external: true,
          },
          { name: "dotfiles.sh", is_directory: false, href: "https://github.com/tuusuario/dotfiles", external: true },
          {
            name: "reading-list.json",
            is_directory: false,
            href: "https://www.goodreads.com/tuusuario",
            external: true,
          },
        ])
      } else if (normalizedPath === "/contact") {
        resolve([
          { name: "email.txt", is_directory: false, href: "mailto:tu@email.com", external: true },
          { name: "github.url", is_directory: false, href: "https://github.com/tuusuario", external: true },
          { name: "twitter.url", is_directory: false, href: "https://twitter.com/tuusuario", external: true },
          { name: "linkedin.url", is_directory: false, href: "https://linkedin.com/in/tuusuario", external: true },
        ])
      } else {
        resolve([])
      }
    }, 300) // Simulate network delay
  })
}

interface FileTreeProps {
  initialPath?: string
}

export function FileTree({ initialPath = "/" }: FileTreeProps) {
  const [treeData, setTreeData] = useState<TreeNode[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Initial data fetch with recursive path resolution
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const normalizedInitialPath = normalizePath(initialPath)
        const pathSegments = getPathSegments(normalizedInitialPath)

        // Start with root data
        const rootFiles = await fetchFiles("/")
        const currentTreeData = rootFiles.map((file) => ({
          ...file,
          id: `/${file.name}`,
          path: `/${file.name}`,
          isExpanded: false,
          children: file.is_directory ? [] : undefined,
        }))

        // Skip the root path as we've already fetched it
        for (let i = 1; i < pathSegments.length; i++) {
          const currentPath = pathSegments[i]
          const parentPath = getParentPath(currentPath)
          const currentName = getNameFromPath(currentPath)

          // Find the parent node in the current tree data
          const findAndUpdateNode = (
            nodes: TreeNode[],
            path: string,
            updateFn: (node: TreeNode) => TreeNode,
          ): boolean => {
            for (let j = 0; j < nodes.length; j++) {
              const node = nodes[j]
              if (node.path === path) {
                nodes[j] = updateFn(node)
                return true
              }
              if (node.children) {
                if (findAndUpdateNode(node.children, path, updateFn)) {
                  return true
                }
              }
            }
            return false
          }

          // Fetch children for the current path segment
          const childFiles = await fetchFiles(currentPath)
          const childNodes = childFiles.map((file) => ({
            ...file,
            id: `${currentPath}/${file.name}`,
            path: `${currentPath}/${file.name}`,
            isExpanded: false,
            children: file.is_directory ? [] : undefined,
          }))

          // Update the tree with the new children and expanded state
          findAndUpdateNode(currentTreeData, currentPath, (node) => ({
            ...node,
            isExpanded: true,
            children: childNodes,
          }))
        }

        setTreeData(currentTreeData)
      } catch (error) {
        console.error("Failed to fetch files:", error)
        setError("Failed to load file tree. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    loadInitialData()
  }, [initialPath])

  // Handle node expansion
  const handleToggle = async (node: TreeNode) => {
    if (!node.is_directory) return

    // Create a deep copy of the current tree data
    const updateTreeData = (nodes: TreeNode[], path: string, updateFn: (node: TreeNode) => TreeNode): TreeNode[] => {
      return nodes.map((n) => {
        if (n.path === path) {
          return updateFn(n)
        }
        if (n.children) {
          return {
            ...n,
            children: updateTreeData(n.children, path, updateFn),
          }
        }
        return n
      })
    }

    // If the node is already expanded, just collapse it
    if (node.isExpanded) {
      setTreeData(
        updateTreeData(treeData, node.path, (n) => ({
          ...n,
          isExpanded: false,
        })),
      )
      return
    }

    // If children are already loaded, just expand
    if (node.children && node.children.length > 0) {
      setTreeData(
        updateTreeData(treeData, node.path, (n) => ({
          ...n,
          isExpanded: true,
        })),
      )
      return
    }

    // Set loading state
    setTreeData(
      updateTreeData(treeData, node.path, (n) => ({
        ...n,
        isLoading: true,
      })),
    )

    try {
      // Fetch children
      const childFiles = await fetchFiles(node.path)
      const childNodes = childFiles.map((file) => ({
        ...file,
        id: `${node.path}/${file.name}`,
        path: `${node.path}/${file.name}`,
        isExpanded: false,
        children: file.is_directory ? [] : undefined,
      }))

      // Update the tree with new children and expanded state
      setTreeData(
        updateTreeData(treeData, node.path, (n) => ({
          ...n,
          isLoading: false,
          isExpanded: true,
          children: childNodes,
        })),
      )
    } catch (error) {
      console.error(`Failed to fetch children for ${node.path}:`, error)
      // Reset loading state on error
      setTreeData(
        updateTreeData(treeData, node.path, (n) => ({
          ...n,
          isLoading: false,
        })),
      )
    }
  }

  // Handle file/link clicks
  const handleFileClick = (node: TreeNode) => {
    if (node.is_directory) {
      handleToggle(node)
    } else if (node.href) {
      if (node.external) {
        window.open(node.href, "_blank", "noopener,noreferrer")
      } else {
        // For internal links, we'll let Next.js handle the navigation
        window.location.href = node.href
      }
    }
  }

  // Recursive component to render tree nodes
  const TreeNodeComponent = ({ node }: { node: TreeNode }) => {
    const content = (
      <div
        className={cn(
          "flex items-center py-1 px-2 rounded-md hover:bg-muted/50 cursor-pointer transition-colors",
          node.isExpanded && "bg-muted/30",
        )}
        onClick={() => handleFileClick(node)}
        aria-expanded={node.isExpanded}
        role={node.is_directory ? "treeitem" : undefined}
        aria-label={`${node.name}${node.is_directory ? " (directory)" : " (file)"}`}
      >
        {node.is_directory ? (
          <ChevronRight
            className={cn(
              "h-4 w-4 mr-1 text-muted-foreground transition-transform",
              node.isExpanded && "transform rotate-90",
            )}
            aria-hidden="true"
          />
        ) : (
          <div className="w-5" />
        )}
        {node.is_directory ? (
          <Folder className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
        ) : (
          <File className="h-4 w-4 mr-2 text-muted-foreground" aria-hidden="true" />
        )}
        <span className="text-sm font-mono">{node.name}</span>
        {node.isLoading && (
          <div
            className="ml-2 h-3 w-3 rounded-full border-2 border-t-transparent border-primary animate-spin"
            aria-label="Loading"
            role="status"
          />
        )}
      </div>
    )

    return (
      <div className="select-none">
        {content}
        {node.isExpanded && node.children && (
          <div className="ml-4 pl-2 border-l border-muted" role="group">
            {node.children.map((childNode) => (
              <TreeNodeComponent key={childNode.id} node={childNode} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">carlos/</h2>
        <p className="text-sm text-muted-foreground">Explora mi portfolio navegando por los directorios</p>
      </div>
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div
            className="h-6 w-6 rounded-full border-2 border-t-transparent border-primary animate-spin"
            aria-label="Loading file tree"
            role="status"
          />
        </div>
      ) : error ? (
        <div className="text-center py-8 text-destructive">{error}</div>
      ) : treeData.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">No files found</div>
      ) : (
        <div
          className="space-y-1 bg-card/30 p-4 rounded-md border border-border"
          role="tree"
          aria-label="Portfolio file tree"
        >
          {treeData.map((node) => (
            <TreeNodeComponent key={node.id} node={node} />
          ))}
        </div>
      )}

      <div className="mt-4 text-xs text-muted-foreground font-mono">
        <p>$ tree carlos/ --depth=2</p>
        <p>4 directories, 15 files</p>
      </div>
    </div>
  )
}
