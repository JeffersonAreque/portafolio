import { FiMapPin } from 'react-icons/fi'
import { about, personal } from '../../data/portfolio'
import { useReveal } from '../../hooks/useReveal'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
  const ref = useReveal()

  return (
    <section id="sobre-mi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Sobre mí" title="Quién está detrás del código" />

        <div ref={ref} className="reveal grid items-center gap-10 md:grid-cols-[auto_1fr]">
          {/* Foto o, si no hay, un círculo con tus iniciales */}
          <div className="mx-auto">
            {personal.photo ? (
              <img
                src={personal.photo}
                alt={`Foto de ${personal.fullName}`}
                width="256"
                height="256"
                loading="lazy"
                className="size-48 rounded-2xl object-cover shadow-lg sm:size-64"
              />
            ) : (
              <div className="flex size-48 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-6xl font-bold text-white shadow-lg sm:size-64">
                {personal.initials}
              </div>
            )}
          </div>

          <div>
            <div className="space-y-4 text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <FiMapPin className="size-4 text-accent-600 dark:text-accent-400" />
              {personal.location}
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm dark:text-slate-400">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
