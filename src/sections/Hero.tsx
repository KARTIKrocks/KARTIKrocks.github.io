import { site } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.eyebrow}>Hi, I'm</p>
      <h1 id="hero-heading" className={styles.name}>
        {site.name}
      </h1>
      <p className={styles.title}>
        <span className={styles.accent}>{site.role}</span>{' '}
        <span className={styles.titleMuted}>— {site.tagline}</span>
      </p>
      <p className={styles.bio}>{site.bio}</p>
      <p className={styles.bioAside}>Off the keyboard — chess and running.</p>
      <div className={styles.cta}>
        <a href="#projects" className={styles.btnPrimary}>
          View Projects
        </a>
        <a href="#contact" className={styles.btnGhost}>
          Get in touch
        </a>
      </div>
    </section>
  )
}
