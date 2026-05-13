import { Suspense, use } from 'react'
import { site } from '../data/portfolio'
import { getOssProjectsPromise } from '../lib/oss'
import ErrorBoundary from '../components/ErrorBoundary'
import type { Project } from '../types'
import styles from './Projects.module.css'

function ProjectCard({ project }: { readonly project: Project }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <ul className={styles.tech} aria-label={`${project.title} tech stack`}>
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className={styles.links}>
        {project.liveUrl !== undefined && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — live demo`}
          >
            Live →
          </a>
        )}
        {project.repoUrl !== undefined && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — source code`}
          >
            Code →
          </a>
        )}
      </div>
    </article>
  )
}

function OssGrid() {
  const projects = use(getOssProjectsPromise())
  if (projects.length === 0) return null
  return (
    <>
      <h3 className={styles.subheading2}>Open Source</h3>
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className={styles.heading}>
        Projects
      </h2>
      <p className={styles.subheading}>A selection of things I've built.</p>
      <div className={styles.grid}>
        {site.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      {/* OSS is loaded at runtime so going private hides it automatically (cached 1h in sessionStorage). */}
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <OssGrid />
        </Suspense>
      </ErrorBoundary>
    </section>
  )
}
