import { site } from '../data/portfolio'
import type { ExperienceRole } from '../types'
import styles from './Experience.module.css'

function Role({ role }: { readonly role: ExperienceRole }) {
  return (
    <article className={styles.role}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          {role.title} <span className={styles.at}>·</span>{' '}
          <span className={styles.company}>{role.company}</span>
        </h3>
        <p className={styles.period}>{role.period}</p>
      </header>
      <ul className={styles.highlights}>
        {role.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <ul className={styles.tech} aria-label={`${role.company} tech stack`}>
        {role.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className={styles.heading}>
        Experience
      </h2>
      <p className={styles.subheading}>Where I've worked and what I've shipped.</p>
      <div className={styles.timeline}>
        {site.experience.map((r) => (
          <Role key={`${r.company}-${r.period}`} role={r} />
        ))}
      </div>
    </section>
  )
}
