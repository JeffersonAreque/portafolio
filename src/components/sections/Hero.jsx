import { FiArrowRight, FiDownload } from 'react-icons/fi'
import { personal, socials } from '../../data/portfolio'
import Button from '../ui/Button'

/* Inicio: lo primero que ve un cliente. Debe decir quién eres y qué ganas por contratarte. */
export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Fondo decorativo: un brillo difuminado del color de acento */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          {personal.available && (
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Disponible para nuevos proyectos
            </p>
          )}

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Hola, soy {personal.name}
          </h1>
          <p className="mt-3 text-xl font-semibold text-accent-600 sm:text-2xl dark:text-accent-400">
            {personal.role}
          </p>
          <p className="mt-6 text-2xl font-medium text-slate-800 dark:text-slate-100">
            {personal.tagline}
          </p>
          <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contacto">
              Contrátame <FiArrowRight className="size-4" />
            </Button>
            <Button href="#proyectos" variant="secondary">
              Ver proyectos
            </Button>
            {personal.cvUrl && (
              <Button href={personal.cvUrl} variant="secondary" download>
                <FiDownload className="size-4" /> Descargar CV
              </Button>
            )}
          </div>

          <ul className="mt-8 flex gap-2">
            {socials.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ventana de código decorativa (solo en pantallas grandes) */}
        <div
          aria-hidden="true"
          className="hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:block dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-slate-700 dark:text-slate-300">
            <code>
              <span className="text-accent-600 dark:text-accent-400">const</span> desarrollador = {'{'}
              {'\n'}  nombre: <span className="text-emerald-600 dark:text-emerald-400">'{personal.name}'</span>,
              {'\n'}  enfoque: [
              {'\n'}    <span className="text-emerald-600 dark:text-emerald-400">'aplicaciones web'</span>,
              {'\n'}    <span className="text-emerald-600 dark:text-emerald-400">'inteligencia artificial'</span>,
              {'\n'}    <span className="text-emerald-600 dark:text-emerald-400">'visión por computadora'</span>,
              {'\n'}  ],
              {'\n'}  ubicacion: <span className="text-emerald-600 dark:text-emerald-400">'Puerto Maldonado, Perú'</span>,
              {'\n'}  disponible: <span className="text-amber-600 dark:text-amber-400">{String(personal.available)}</span>,
              {'\n'}{'}'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
