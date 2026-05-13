import type { Project } from '../types'

const OWNER = 'KARTIKrocks'

const CANDIDATES: readonly string[] = [
  'wshub',
  'apikit',
  'rabbitwrap',
  'gomapper',
  'goemail',
  'gosms',
  'objstore',
]

const CACHE_KEY = `oss:${OWNER}:v1`
const TTL_MS = 60 * 60 * 1000 // 1 hour — avoids hammering GitHub's unauth rate limit on reloads

interface GhRepo {
  readonly name: string
  readonly description: string | null
  readonly language: string | null
  readonly topics?: readonly string[]
  readonly html_url: string
  readonly homepage: string | null
  readonly private: boolean
  readonly archived: boolean
}

interface CachedShape {
  readonly expiresAt: number
  readonly projects: readonly Project[]
}

function readCache(): readonly Project[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (raw === null) return null
    const parsed = JSON.parse(raw) as CachedShape
    if (parsed.expiresAt > Date.now()) return parsed.projects
  } catch {
    /* sessionStorage unavailable or malformed — fall through */
  }
  return null
}

function writeCache(projects: readonly Project[]): void {
  try {
    const value: CachedShape = { expiresAt: Date.now() + TTL_MS, projects }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(value))
  } catch {
    /* ignore */
  }
}

function toProject(repo: GhRepo): Project {
  const tech: string[] = []
  if (repo.language !== null && repo.language.length > 0) tech.push(repo.language)
  for (const t of repo.topics?.slice(0, 4) ?? []) {
    if (!tech.includes(t)) tech.push(t)
  }
  tech.push('OSS')

  const base = {
    title: repo.name,
    description: repo.description ?? `Open-source library: ${repo.name}.`,
    tech,
    repoUrl: repo.html_url,
  }
  const homepage = repo.homepage
  return homepage?.startsWith('http') === true ? { ...base, liveUrl: homepage } : base
}

async function fetchRepo(name: string): Promise<Project | null> {
  const res = await fetch(`https://api.github.com/repos/${OWNER}/${name}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (res.status === 404) return null // not found OR private (without auth, private repos return 404)
  if (!res.ok) throw new Error(`GitHub ${name}: ${String(res.status)}`)
  const repo = (await res.json()) as GhRepo
  if (repo.private || repo.archived) return null
  return toProject(repo)
}

async function fetchPublicOss(): Promise<readonly Project[]> {
  const cached = readCache()
  if (cached !== null) return cached

  const results = await Promise.allSettled(CANDIDATES.map((n) => fetchRepo(n)))
  const projects: Project[] = []
  for (const r of results) {
    if (r.status === 'fulfilled' && r.value !== null) projects.push(r.value)
  }
  writeCache(projects)
  return projects
}

// Memoized at module scope so React 19's `use()` gets a stable promise across renders.
let pending: Promise<readonly Project[]> | null = null

export function getOssProjectsPromise(): Promise<readonly Project[]> {
  pending ??= fetchPublicOss()
  return pending
}
