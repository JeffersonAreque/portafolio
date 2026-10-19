/*
  ⭐ TODO EL CONTENIDO DE TU PORTAFOLIO ESTÁ AQUÍ ⭐
  Reemplaza los datos de ejemplo por los tuyos. Los componentes leen
  este archivo, así que no necesitas tocar el resto del código.
*/
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiCode, FiLayout, FiMail, FiServer, FiTrendingUp } from 'react-icons/fi'
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export const personal = {
  name: 'Tu Nombre',
  initials: 'TN',
  role: 'Ingeniero de Software Freelance',
  // Propuesta de valor: qué haces y qué gana el cliente
  tagline: 'Construyo aplicaciones web rápidas y confiables que hacen crecer tu negocio.',
  intro:
    'Ayudo a emprendedores, pymes y startups a convertir ideas en productos digitales: desde la web de tu negocio hasta sistemas a medida, con código limpio y entregas a tiempo.',
  location: 'Perú · Trabajo remoto',
  available: true,
  email: 'tucorreo@ejemplo.com',
  // Número con código de país, sin + ni espacios (Perú = 51)
  whatsapp: '51999999999',
  // Pon tu CV en /public/cv.pdf y cambia esto a '/cv.pdf'. Con null se oculta el botón.
  cvUrl: null,
  // Pon tu foto en src/assets/ e impórtala aquí. Con null se muestran tus iniciales.
  photo: null,
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: FaGithub },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tu-usuario', icon: FaLinkedin },
  { label: 'WhatsApp', url: `https://wa.me/${personal.whatsapp}`, icon: FaWhatsapp },
  { label: 'Correo', url: `mailto:${personal.email}`, icon: FiMail },
]

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' },
]

export const about = {
  paragraphs: [
    'Soy ingeniero de software con experiencia creando aplicaciones web de principio a fin: escucho el problema del cliente, diseño la solución y la llevo a producción.',
    'Me enfoco en que cada proyecto sea rápido, fácil de usar y fácil de mantener. Me comunico de forma clara y constante, para que siempre sepas en qué punto está tu proyecto.',
    'Fuera del código, me gusta aprender nuevas tecnologías y compartir lo que aprendo con la comunidad.',
  ],
  stats: [
    { value: '3+', label: 'Años programando' },
    { value: '15+', label: 'Proyectos entregados' },
    { value: '100%', label: 'Compromiso con plazos' },
  ],
}

export const services = [
  {
    icon: FiLayout,
    title: 'Desarrollo web',
    description: 'Sitios y aplicaciones web modernas, responsive y optimizadas para Google.',
    deliverables: ['Landing pages', 'Webs corporativas', 'Paneles de administración'],
  },
  {
    icon: FiServer,
    title: 'APIs y backend',
    description: 'Servidores seguros y escalables que conectan tu aplicación con tus datos.',
    deliverables: ['APIs REST', 'Bases de datos', 'Autenticación de usuarios'],
  },
  {
    icon: FiCode,
    title: 'Software a medida',
    description: 'Sistemas hechos para tu proceso: inventarios, reservas, ventas y más.',
    deliverables: ['Análisis de requisitos', 'Desarrollo completo', 'Capacitación'],
  },
  {
    icon: FiTrendingUp,
    title: 'Mantenimiento y optimización',
    description: 'Mejoro la velocidad, seguridad y estabilidad de tu aplicación actual.',
    deliverables: ['Corrección de errores', 'Mejoras de rendimiento', 'Soporte mensual'],
  },
]

export const projects = [
  {
    title: 'Sistema de reservas para restaurante',
    problem:
      'El restaurante tomaba reservas por teléfono y perdía clientes por errores y mesas duplicadas.',
    solution:
      'Aplicación web donde los clientes reservan en línea y el personal gestiona las mesas en tiempo real.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/tu-usuario/reservas-restaurante',
    demo: null,
  },
  {
    title: 'Panel de inventario para tienda',
    problem:
      'La tienda controlaba su stock en hojas de cálculo y no sabía a tiempo qué productos reponer.',
    solution:
      'Panel con alertas de stock bajo, reportes de ventas y control de usuarios por roles.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/tu-usuario/panel-inventario',
    demo: 'https://panel-inventario.vercel.app',
  },
  {
    title: 'API de pagos y facturación',
    problem: 'Una startup necesitaba cobrar suscripciones y emitir comprobantes sin hacerlo a mano.',
    solution:
      'API REST que gestiona suscripciones, pagos recurrentes y genera comprobantes automáticamente.',
    technologies: ['Python', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/tu-usuario/api-pagos',
    demo: null,
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    category: 'Bases de datos',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: SiFigma },
    ],
  },
]
