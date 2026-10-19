import { FiMoon, FiSun } from 'react-icons/fi'

/* Botón sol/luna. Recibe el estado y la función desde useTheme (en App.jsx). */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {isDark ? <FiSun className="size-5" /> : <FiMoon className="size-5" />}
    </button>
  )
}
