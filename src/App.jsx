import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Services from './components/sections/Services'
import Skills from './components/sections/Skills'
import { useTheme } from './hooks/useTheme'

/* App une todas las piezas en el orden en que aparecen en la página. */
export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
