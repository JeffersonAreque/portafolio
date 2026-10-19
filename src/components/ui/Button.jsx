/*
  Botón reutilizable con dos estilos:
  - variant="primary": fondo de color (acción principal)
  - variant="secondary": solo borde (acción secundaria)
  Si recibe `href`, se dibuja como enlace <a>; si no, como <button>.
*/
const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-accent-600 text-white shadow-sm hover:bg-accent-500',
  secondary:
    'border border-slate-300 text-slate-800 hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-accent-400 dark:hover:text-accent-400',
}

export default function Button({ href, variant = 'primary', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
