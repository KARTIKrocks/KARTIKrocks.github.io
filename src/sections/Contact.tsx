import { site } from '../data/portfolio'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className={styles.heading}>
        Contact
      </h2>
      <p className={styles.subheading}>
        Have a project in mind, a question, or just want to say hi? My inbox is open.
      </p>
      <ul className={styles.links}>
        <li>
          <a href={`mailto:${site.email}`} className={styles.link}>
            Email
          </a>
        </li>
        {site.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className={styles.link}
              {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
