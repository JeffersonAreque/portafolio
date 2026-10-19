import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, personal } from '../../data/portfolio'
import ThemeToggle from '../ui/ThemeToggle'

/*
  Menú fijo en la parte superior.
  - En pantallas medianas o más grandes (md:) se ven todos los enlaces.
  - En móvil se muestra un botón hamburguesa que abre/cierra el menú.
*/
export default function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          className="text-lg font-bold text-slate-900 dark:text-white"
          onClick={closeMenu}
        >
          {personal.name}
          <span className="text-accent-600 dark:text-accent-400">.</span>
        </a>

        {/* Enlaces de escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-200 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {isOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="border-t border-slate-200 bg-slate-50 px-4 py-3 md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
