import { useState } from 'react'

/*
  Maneja el modo oscuro/claro.
  - El tema inicial ya lo aplicó el script de index.html, así que solo lo leemos.
  - Al cambiarlo, actualizamos la clase "dark" de <html> y lo guardamos en localStorage.
*/
export function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  )

  function toggleTheme() {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // localStorage bloqueado: el tema funciona igual, solo no se recuerda
    }
    setIsDark(next)
  }

  return { isDark, toggleTheme }
}
