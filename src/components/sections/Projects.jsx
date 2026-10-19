import { FaGithub } from 'react-icons/fa'
import { projects, socials } from '../../data/portfolio'
import Button from '../ui/Button'
import ProjectCard from '../ui/ProjectCard'
import SectionTitle from '../ui/SectionTitle'

export default function Projects() {
  const github = socials.find((social) => social.label === 'GitHub')

  return (
    <section id="proyectos" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Proyectos"
          title="Proyectos destacados"
          subtitle="Problemas reales y cómo los resolví con software."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {github && (
          <div className="mt-12 text-center">
            <Button href={github.url} variant="secondary" target="_blank" rel="noopener noreferrer">
              <FaGithub className="size-4" /> Ver más en GitHub
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
