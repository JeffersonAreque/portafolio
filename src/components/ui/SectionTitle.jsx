import { useReveal } from '../../hooks/useReveal'

/* Encabezado común de cada sección: etiqueta pequeña, título y subtítulo. */
export default function SectionTitle({ eyebrow, title, subtitle }) {
  const ref = useReveal()

  return (
    <div ref={ref} className="reveal mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wider text-accent-600 uppercase dark:text-accent-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  )
}
