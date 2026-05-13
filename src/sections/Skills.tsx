import { site } from '../data/portfolio'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.heading}>
        Skills
      </h2>
      <p className={styles.subheading}>Tools and technologies I work with.</p>
      <div className={styles.groups}>
        {site.skills.map((group) => (
          <div key={group.label} className={styles.group}>
            <h3 className={styles.label}>{group.label}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
