import { useEffect, useRef } from 'react'

/*
  Hace que un elemento aparezca suavemente cuando entra en pantalla.
  Uso: const ref = useReveal()  →  <div ref={ref} className="reveal">
  IntersectionObserver avisa cuando el elemento es visible; entonces
  añadimos la clase "is-visible" (definida en index.css) y dejamos de observar.
*/
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return ref
}
