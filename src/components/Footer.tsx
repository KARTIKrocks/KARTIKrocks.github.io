import { site } from '../data/portfolio'
import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © <time dateTime={String(YEAR)}>{YEAR}</time> {site.name} · Built with React + Vite
      </p>
    </footer>
  )
}
