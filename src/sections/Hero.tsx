import { site } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Backend systems engineer</p>
        <h1 id="hero-heading" className={styles.name}>
          {site.name}
        </h1>
        <p className={styles.title}>
          <span className={styles.accent}>{site.role}</span>{' '}
          <span className={styles.titleMuted}>for {site.tagline}</span>
        </p>
        <p className={styles.bio}>{site.bio}</p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>
            View Work
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Contact
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <figure className={styles.photoCard}>
          <img
            src="/images/kartik-image-portfolio.jpg"
            alt="Kartik Rajput standing outdoors in the hills"
          />
        </figure>
        <div className={styles.snapshot} aria-label="Professional highlights">
          {site.highlights.map((item) => (
            <div key={item.label} className={styles.metric}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
