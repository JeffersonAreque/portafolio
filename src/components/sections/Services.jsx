import { FiCheck } from 'react-icons/fi'
import { services } from '../../data/portfolio'
import { useReveal } from '../../hooks/useReveal'
import SectionTitle from '../ui/SectionTitle'

function ServiceCard({ service }) {
  const ref = useReveal()
  const { icon: Icon, title, description, deliverables } = service

  return (
    <article
      ref={ref}
      className="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="inline-flex rounded-xl bg-accent-500/10 p-3 text-accent-600 dark:text-accent-400">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{description}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {deliverables.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <FiCheck className="size-4 shrink-0 text-emerald-500" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-100/60 py-20 sm:py-28 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Servicios"
          title="¿En qué puedo ayudarte?"
          subtitle="Soluciones de principio a fin, adaptadas al tamaño y presupuesto de tu proyecto."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
