import { skills } from '../../data/portfolio'
import { useReveal } from '../../hooks/useReveal'
import SectionTitle from '../ui/SectionTitle'

function SkillGroup({ group }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
    >
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {group.items.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium dark:border-slate-700"
          >
            <Icon className="size-4 text-accent-600 dark:text-accent-400" />
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="habilidades" className="bg-slate-100/60 py-20 sm:py-28 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías con las que trabajo"
          subtitle="Elijo la herramienta adecuada para cada proyecto."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
