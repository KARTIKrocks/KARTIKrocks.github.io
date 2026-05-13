export interface Project {
  readonly title: string
  readonly description: string
  readonly tech: readonly string[]
  readonly liveUrl?: string
  readonly repoUrl?: string
}

export interface SkillGroup {
  readonly label: string
  readonly items: readonly string[]
}

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly external: boolean
}

export interface ExperienceRole {
  readonly company: string
  readonly title: string
  readonly period: string
  readonly highlights: readonly string[]
  readonly tech: readonly string[]
}

export interface Certification {
  readonly name: string
  readonly issuer: string
  readonly date?: string
  readonly verifyUrl?: string
}

export interface SiteConfig {
  readonly name: string
  readonly role: string
  readonly tagline: string
  readonly bio: string
  readonly email?: string
  readonly socials: readonly SocialLink[]
  readonly experience: readonly ExperienceRole[]
  readonly projects: readonly Project[]
  readonly skills: readonly SkillGroup[]
  readonly certifications: readonly Certification[]
}
