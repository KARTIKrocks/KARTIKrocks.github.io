import Nav from './components/Nav'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.app}>
      <a href="#main" className={styles.skipLink}>
        Skip to content
      </a>
      <Nav />
      <main id="main" className={styles.main}>
        <ErrorBoundary>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}
