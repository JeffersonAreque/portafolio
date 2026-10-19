import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { personal, socials } from '../../data/portfolio'
import { useReveal } from '../../hooks/useReveal'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

/*
  El ID de Formspree se lee del archivo .env (VITE_FORMSPREE_ID).
  Vite solo expone al navegador las variables que empiezan con "VITE_".
*/
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const inputClasses =
  'mt-2 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/30 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white'

export default function Contact() {
  // status puede ser: 'idle' (inicial), 'sending', 'success' o 'error'
  const [status, setStatus] = useState('idle')
  const ref = useReveal()

  async function handleSubmit(event) {
    event.preventDefault() // evita que el navegador recargue la página
    const form = event.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Formspree respondió con error')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contacto"
          title="¿Tienes un proyecto en mente?"
          subtitle="Cuéntame tu idea y te respondo en menos de 24 horas con una propuesta."
        />

        <div ref={ref} className="reveal grid gap-10 lg:grid-cols-[1fr_2fr]">
          {/* Contacto directo */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hablemos directamente</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Si prefieres, escríbeme por cualquiera de estos medios:
            </p>
            <ul className="mt-6 space-y-3">
              {socials.map(({ label, url, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 font-medium transition hover:border-accent-500 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-accent-400"
                  >
                    <Icon className="size-5 text-accent-600 dark:text-accent-400" />
                    {label === 'Correo' ? personal.email : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900"
          >
            {!FORMSPREE_ID && (
              <p className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-800 dark:text-amber-300">
                El formulario aún no está configurado. Crea un archivo <code>.env</code> con{' '}
                <code>VITE_FORMSPREE_ID=tu_id</code> (ver README).
              </p>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                Nombre
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className={inputClasses}
                />
              </label>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100">
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="tu@correo.com"
                  className={inputClasses}
                />
              </label>
            </div>

            <label className="mt-6 block text-sm font-medium text-slate-900 dark:text-slate-100">
              Mensaje
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Cuéntame sobre tu proyecto: qué necesitas, plazos y presupuesto aproximado."
                className={inputClasses}
              />
            </label>

            {/* Campo trampa anti-spam: invisible para personas, los bots lo rellenan */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button type="submit" disabled={!FORMSPREE_ID || status === 'sending'}>
                <FiSend className="size-4" />
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </Button>

              {/* aria-live hace que los lectores de pantalla anuncien el resultado */}
              <p aria-live="polite" className="text-sm">
                {status === 'success' && (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    ¡Gracias! Tu mensaje fue enviado. Te responderé pronto.
                  </span>
                )}
                {status === 'error' && (
                  <span className="text-red-600 dark:text-red-400">
                    No se pudo enviar. Inténtalo de nuevo o escríbeme a {personal.email}.
                  </span>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
