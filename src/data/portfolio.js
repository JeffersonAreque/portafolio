/*
  ⭐ TODO EL CONTENIDO DE TU PORTAFOLIO ESTÁ AQUÍ ⭐
  Los componentes leen este archivo, así que para actualizar
  el portafolio no necesitas tocar el resto del código.
*/
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiCode, FiCpu, FiDatabase, FiEye, FiLayout, FiMail, FiServer } from 'react-icons/fi'
import {
  SiAndroidstudio,
  SiArduino,
  SiCss,
  SiEspressif,
  SiFastapi,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMediapipe,
  SiMysql,
  SiOpencv,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiYolo,
} from 'react-icons/si'

export const personal = {
  name: 'Jefferson Areque',
  fullName: 'Jefferson Santos Areque Chirinos',
  initials: 'JA',
  role: 'Desarrollador de Software Freelance',
  // Propuesta de valor: qué haces y qué gana el cliente
  tagline: 'Desarrollo aplicaciones web y sistemas con inteligencia artificial que resuelven problemas reales.',
  intro:
    'Soy estudiante de Ingeniería de Sistemas e Informática y desarrollador enfocado en aplicaciones web, inteligencia artificial y visión por computadora. Ofrezco servicios freelance de desarrollo.',
  location: 'Puerto Maldonado, Perú · Trabajo remoto',
  available: true,
  email: 'jarequechirinos16@gmail.com',
  // Número con código de país, sin + ni espacios (Perú = 51)
  whatsapp: '51910130538',
  // Pon tu CV en /public/cv.pdf y cambia esto a '/cv.pdf'. Con null se oculta el botón.
  cvUrl: null,
  // Pon tu foto en src/assets/ e impórtala aquí. Con null se muestran tus iniciales.
  photo: null,
}

export const socials = [
  { label: 'GitHub', url: 'https://github.com/JeffersonAreque', icon: FaGithub },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jefferson-santos-areque-chirinos-56b1582a7/',
    icon: FaLinkedin,
  },
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
    'Soy Jefferson Santos Areque Chirinos, estudiante de 8.º ciclo de Ingeniería de Sistemas e Informática en la Universidad Nacional Amazónica de Madre de Dios (UNAMAD), en Puerto Maldonado, Perú.',
    'Me enfoco en el desarrollo de aplicaciones web, inteligencia artificial y visión por computadora. He trabajado en proyectos como un sistema de reconocimiento facial para la seguridad escolar y un detector de distracción del conductor en tiempo real.',
    'Ofrezco servicios freelance de desarrollo y me interesa especialmente crear soluciones tecnológicas útiles para mi región.',
  ],
  stats: [
    { value: '8.º', label: 'Ciclo de Ingeniería de Sistemas' },
    { value: '4', label: 'Proyectos destacados' },
    { value: 'Web + IA', label: 'Áreas de enfoque' },
  ],
}

export const services = [
  {
    icon: FiLayout,
    title: 'Desarrollo web',
    description: 'Páginas y aplicaciones web a medida, adaptadas a celulares, tablets y computadoras.',
    deliverables: ['Páginas web', 'Aplicaciones web a medida', 'Diseño responsive'],
  },
  {
    icon: FiEye,
    title: 'IA y visión por computadora',
    description: 'Sistemas que reconocen rostros, detectan objetos o analizan video.',
    deliverables: ['Reconocimiento facial', 'Detección de objetos', 'Prototipos inteligentes'],
  },
  {
    icon: FiServer,
    title: 'Backend y bases de datos',
    description: 'APIs y sistemas para registrar, consultar y gestionar tu información.',
    deliverables: ['APIs con FastAPI', 'Bases de datos MySQL', 'Sistemas CRUD'],
  },
  {
    icon: FiCpu,
    title: 'Automatización e IoT',
    description: 'Prototipos con microcontroladores y sensores para medir y monitorear.',
    deliverables: ['Prototipos con ESP32', 'Integración de sensores', 'Paneles de monitoreo'],
  },
]

/*
  badges: etiquetas opcionales que aparecen junto al título del proyecto
  (por ejemplo "En desarrollo" o "Proyecto en equipo").
*/
export const projects = [
  {
    title: 'SafePickup',
    badges: ['En proceso de publicación científica'],
    problem:
      'En los colegios es difícil verificar que solo los apoderados autorizados recojan a cada estudiante.',
    solution:
      'Sistema de reconocimiento facial (MTCNN + FaceNet) que verifica la identidad del apoderado. Incluye la gestión completa de apoderados, estudiantes y aulas.',
    technologies: ['Python', 'facenet-pytorch', 'FastAPI', 'MySQL', 'HTML/CSS/JS'],
    github: 'https://github.com/JeffersonAreque',
    demo: null,
  },
  {
    title: 'Detección de distracción del conductor',
    badges: ['Proyecto en equipo (2)'],
    problem: 'La somnolencia y el uso del celular al volante son causas frecuentes de accidentes.',
    solution:
      'Sistema en tiempo real que detecta somnolencia, cabeceo y uso del celular, y alerta al conductor por voz.',
    technologies: ['Python', 'OpenCV', 'MediaPipe FaceMesh', 'YOLOv8', 'pyttsx3'],
    github: 'https://github.com/JeffersonAreque',
    demo: null,
  },
  {
    title: 'EcoMap',
    badges: ['En desarrollo', 'Postulado a Capital Semilla UNAMAD 2026'],
    problem: 'La recolección de residuos en Puerto Maldonado necesita rutas y una coordinación más eficientes.',
    solution:
      'Plataforma con app para vecinos, app para conductores, panel web, rastreo GPS e IA para optimizar las rutas de recolección.',
    technologies: ['Apps móviles', 'Panel web', 'GPS', 'IA'],
    github: 'https://github.com/JeffersonAreque',
    demo: null,
  },
  {
    title: 'La Tablita',
    badges: ['Proyecto en equipo'],
    problem: 'Un restaurante de comida criolla necesitaba gestionar su carta, pedidos, reservas y ventas.',
    solution:
      'App Android con rol cliente (carta, delivery y reservas) y rol personal (mesas, pedidos y ventas).',
    technologies: ['Kotlin', 'Jetpack Compose', 'Material Design'],
    github: 'https://github.com/JeffersonAreque',
    demo: null,
  },
]

export const skills = [
  {
    category: 'Lenguajes',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'SQL', icon: FiDatabase },
      { name: 'C++ (Arduino)', icon: SiArduino },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend y datos',
    items: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    category: 'IA y visión por computadora',
    items: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'MediaPipe', icon: SiMediapipe },
      { name: 'YOLOv8', icon: SiYolo },
      { name: 'CNN', icon: FiCode },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'ESP32 / IoT', icon: SiEspressif },
    ],
  },
]
