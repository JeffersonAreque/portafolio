import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { useReveal } from '../../hooks/useReveal'

/* Tarjeta de un proyecto: problema, solución, tecnologías y enlaces. */
export default function ProjectCard({ project }) {
  const ref = useReveal()
  const { title, badges = [], problem, solution, technologies, github, demo } = project

  return (
    <article
      ref={ref}
      className="reveal flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>

      {badges.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-md border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-300"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}

      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-slate-900 dark:text-slate-100">El problema</dt>
          <dd className="mt-1 text-slate-600 dark:text-slate-400">{problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900 dark:text-slate-100">La solución</dt>
          <dd className="mt-1 text-slate-600 dark:text-slate-400">{solution}</dd>
        </div>
      </dl>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-600 dark:text-accent-400"
          >
            {tech}
          </li>
        ))}
      </ul>

      {/* mt-auto empuja los enlaces al fondo para que todas las tarjetas se alineen */}
      <div className="mt-auto flex gap-4 pt-6 text-sm font-semibold">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-700 hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-400"
        >
          <FaGithub className="size-4" /> Código
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-accent-600 dark:text-slate-200 dark:hover:text-accent-400"
          >
            <FiExternalLink className="size-4" /> Demo
          </a>
        )}
      </div>
    </article>
  )
}
