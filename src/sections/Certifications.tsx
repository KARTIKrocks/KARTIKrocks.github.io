import { site } from '../data/portfolio'
import type { Certification } from '../types'
import styles from './Certifications.module.css'

function Card({ cert }: { readonly cert: Certification }) {
  const content = (
    <>
      <h3 className={styles.name}>{cert.name}</h3>
      <p className={styles.issuer}>
        {cert.issuer}
        {cert.date !== undefined && <span className={styles.date}> · {cert.date}</span>}
      </p>
    </>
  )

  return cert.verifyUrl !== undefined ? (
    <a
      href={cert.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${styles.cardLink}`}
      aria-label={`${cert.name} — verify credential`}
    >
      {content}
      <span className={styles.verify} aria-hidden="true">
        Verify →
      </span>
    </a>
  ) : (
    <article className={styles.card}>{content}</article>
  )
}

export default function Certifications() {
  if (site.certifications.length === 0) return null
  return (
    <section id="certifications" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className={styles.heading}>
        Certifications
      </h2>
      <p className={styles.subheading}>Industry credentials I've earned.</p>
      <div className={styles.grid}>
        {site.certifications.map((c) => (
          <Card key={c.name} cert={c} />
        ))}
      </div>
    </section>
  )
}
