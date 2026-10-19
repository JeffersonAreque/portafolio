# Portafolio — Ingeniero de Software Freelance

Portafolio personal de una sola página hecho con **React + Vite + Tailwind CSS**.
Tiene modo oscuro/claro, es responsive y carga rápido.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior (incluye `npm`)

## Comandos

```bash
npm install       # instala las dependencias (solo la primera vez)
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # genera la versión de producción en la carpeta dist/
npm run preview   # muestra la versión de producción en local
npm run lint      # revisa el código en busca de errores comunes
```

## Cómo editar tu contenido

Todo el texto está en **`src/data/portfolio.js`**: nombre, propuesta de valor, servicios,
proyectos, habilidades y enlaces. Edita ese archivo y la página se actualiza sola.

- **Tu foto:** guárdala en `src/assets/` (por ejemplo `profile.webp`), impórtala al inicio de
  `portfolio.js` con `import profile from '../assets/profile.webp'` y pon `photo: profile`.
- **Tu CV:** guarda el archivo como `public/cv.pdf` y pon `cvUrl: '/cv.pdf'`.
- **Iconos de tecnologías:** búscalos en [react-icons](https://react-icons.github.io/react-icons/)
  (los logos están en la colección "Simple Icons", con prefijo `Si`).
- **Título y descripción para Google:** edita las etiquetas `<title>` y `<meta>` en `index.html`.
- **Color de acento:** cambia los valores `--color-accent-*` en `src/index.css`.

## Formulario de contacto (Formspree)

1. Crea una cuenta gratuita en [formspree.io](https://formspree.io) y crea un formulario.
2. Copia el ID del formulario (la parte final de `https://formspree.io/f/XXXXXXXX`).
3. Copia `.env.example` como `.env` y pega el ID: `VITE_FORMSPREE_ID=XXXXXXXX`.
4. Reinicia `npm run dev`.

## Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com), elige **Add New → Project** e importa el repositorio.
   Vercel detecta Vite automáticamente.
3. En **Environment Variables** añade `VITE_FORMSPREE_ID` con tu ID.
4. Pulsa **Deploy**. Cada vez que subas cambios a GitHub, Vercel publicará la nueva versión.

## Estructura

```
src/
├── components/
│   ├── layout/    # Navbar y Footer (aparecen siempre)
│   ├── sections/  # Hero, About, Services, Projects, Skills, Contact
│   └── ui/        # Piezas reutilizables: Button, SectionTitle, ProjectCard, ThemeToggle
├── data/          # portfolio.js: todo tu contenido
├── hooks/         # useTheme (modo oscuro) y useReveal (animación al hacer scroll)
├── App.jsx        # une las secciones
├── main.jsx       # punto de entrada
└── index.css      # Tailwind + estilos globales
```
