"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SidebarToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    const newState = !isSidebarOpen
    setIsSidebarOpen(newState)

    const sidebar = document.querySelector("[data-sidebar]")
    if (sidebar) {
      if (newState) {
        sidebar.classList.add("open")
      } else {
        sidebar.classList.remove("open")
      }
    }
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50" onClick={toggleSidebar}>
        {isSidebarOpen ? <X /> : <Menu />}
        <span className="sr-only">Toggle Sidebar</span>
      </Button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden" onClick={toggleSidebar} />
      )}

      {/* Add styles for the sidebar */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .sidebar-container {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          
          .sidebar-container.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
