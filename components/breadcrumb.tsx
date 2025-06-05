"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import React from "react"

export default function BreadcrumbNav() {
  const pathname = usePathname()

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null
  }

  const pathSegments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { name: "Inicio", href: "/" },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/")
      let name = segment

      // Customize names for better readability
      switch (segment) {
        case "projects":
          name = "Proyectos"
          break
        case "writings":
          name = "Escritos"
          break
        case "contact":
          name = "Contacto"
          break
        default:
          // Capitalize first letter and replace hyphens with spaces
          name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ")
      }

      return { name, href }
    }),
  ]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{item.name}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
