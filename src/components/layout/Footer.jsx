import { personal, socials } from '../../data/portfolio'

// El año se calcula solo, así nunca queda desactualizado
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {personal.name}. Hecho con React y Tailwind CSS.
        </p>
        <ul className="flex gap-2">
          {socials.map(({ label, url, icon: Icon }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block rounded-lg p-2 text-slate-500 transition hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
