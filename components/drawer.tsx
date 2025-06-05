'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Post {
  id: string;
  title: string;
  slug: string;
}

interface DrawerProps {
  posts: Post[];
}

export default function Drawer({ posts }: DrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState('ES');

  // Ensure component is mounted before showing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const drawer = document.getElementById('drawer');
      const toggleButton = document.getElementById('drawer-toggle');

      if (
        drawer &&
        isOpen &&
        !drawer.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent scrolling when drawer is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        id="drawer-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Drawer */}
      <div
        id="drawer"
        className={`fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-md border-l border-border transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="mb-12 mt-12">
            <Link
              href="/"
              className="text-xl font-bold no-underline"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </div>

          <nav>
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  className="block text-foreground no-underline hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block text-foreground no-underline hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/writings"
                  className="block text-foreground no-underline hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Escritos
                </Link>
              </li>
              <li>
                <Link
                  href="/random"
                  className="block text-foreground no-underline hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Random
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-foreground no-underline hover:text-muted-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <hr className="my-8 border-border" />

          <div className="mb-4">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              Tema
            </h2>
          </div>

          <div className="space-y-2 mb-8">
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors text-left ${
                theme === 'dark'
                  ? 'bg-accent text-foreground'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Moon size={16} />
              <span>Oscuro</span>
            </button>
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors text-left ${
                theme === 'light'
                  ? 'bg-accent text-foreground'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Sun size={16} />
              <span>Claro</span>
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`flex items-center gap-3 w-full py-2 px-3 rounded-md transition-colors text-left ${
                theme === 'system'
                  ? 'bg-accent text-foreground'
                  : 'text-foreground hover:bg-accent'
              }`}
            >
              <Monitor size={16} />
              <span>Sistema</span>
            </button>
          </div>

          <hr className="my-8 border-border" />

          {mounted && (
            <div className="mt-8 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {theme === 'dark' && <Moon size={14} />}
                  {theme === 'light' && <Sun size={14} />}
                  {theme === 'system' && <Monitor size={14} />}
                  <span>
                    Tema:{' '}
                    {theme === 'dark'
                      ? 'Oscuro'
                      : theme === 'light'
                      ? 'Claro'
                      : 'Sistema'}
                  </span>
                </div>

                <button
                  onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                  className="px-3 py-1 text-xs font-mono bg-accent hover:bg-muted transition-colors rounded border border-border"
                >
                  {language}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
