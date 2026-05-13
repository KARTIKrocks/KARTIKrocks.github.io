import type { SiteConfig } from '../types'

export const site: SiteConfig = {
  name: 'Kartik Rajput',
  role: 'Software Engineer',
  tagline: 'Go backends, distributed systems, observability, and Web3 infrastructure.',
  bio: "I'm a software engineer based in Vadodara, India, building reliable backend systems in Go and TypeScript. Most recently at Nurdsoft and Middleware (YC-23), I worked on cloud observability, synthetic monitoring, health checks, and ingestion pipelines. Previously at Tntra, I built Hyperledger Fabric and Besu-based blockchain systems. I also maintain open-source Go libraries on the side.",
  highlights: [
    { value: '3+ yrs', label: 'Backend and infrastructure engineering' },
    { value: 'YC-23', label: 'Observability product experience' },
    { value: 'CKAD', label: 'Kubernetes certified' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/KARTIKrocks', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajputkartik/', external: true },
  ],
  experience: [
    {
      company: 'Nurdsoft',
      title: 'Software Engineer',
      period: 'Jun 2025 – Current',
      highlights: [
        'Designed an image-processing pipeline that generates multi-resolution book assets for mobile clients.',
        'Built distributed health monitoring for microservices across uptime, latency, and fault signals.',
        'Integrated QuickBooks APIs to automate invoicing and added focused unit coverage across service modules.',
      ],
      tech: [
        'Go',
        'Node.js',
        'React',
        'GraphQL',
        'PostgreSQL',
        'AWS Lambda',
        'Kinesis',
        'DynamoDB',
      ],
    },
    {
      company: 'Middleware (YC-23)',
      companyUrl: 'https://middleware.io/',
      title: 'Software Engineer',
      period: 'Jun 2024 – May 2025',
      highlights: [
        'Designed heartbeat monitoring for enterprise-grade uptime analytics.',
        'Implemented low-latency ingestion pipelines feeding real-time health dashboards.',
        'Maintained the Synthetics module and Synthetic Agent with a focus on reliability, performance, and release stability.',
      ],
      tech: ['Go', 'React', 'PostgreSQL', 'Pulsar', 'ClickHouse', 'Docker', 'Kubernetes'],
    },
    {
      company: 'Tntra',
      companyUrl: 'https://www.tntra.io/',
      title: 'Software Engineer',
      period: 'Aug 2022 – May 2024',
      highlights: [
        'Built a Hyperledger Fabric reward-points network for a consortium of partner institutions.',
        'Developed Solidity smart contracts on Hyperledger Besu for ERC-20 token issuance and settlement.',
        'Integrated Prometheus and Grafana observability across blockchain platforms.',
      ],
      tech: [
        'Go',
        'Node.js',
        'Java',
        'Solidity',
        'Hyperledger Fabric',
        'Hyperledger Besu',
        'Ethers.js',
        'React',
        'PostgreSQL',
        'AWS',
      ],
    },
    {
      company: 'Tntra',
      companyUrl: 'https://www.tntra.io/',
      title: 'Software Engineer Intern',
      period: 'May 2022 – Aug 2022',
      highlights: [
        'Explored the Web3 stack — Go, Hyperledger Fabric, Solidity, and React.',
        'Gained foundational experience in AWS cloud and Docker container workflows.',
      ],
      tech: ['Go', 'Hyperledger Fabric', 'Solidity', 'React', 'AWS', 'Docker'],
    },
  ],
  projects: [
    {
      title: 'Chess Opening Practice',
      description:
        'A freelance project for a 2300-rated AGM coach, helping chess students practice assigned opening lines. Built solo end-to-end.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
      liveUrl: 'https://app.mychesslearning.com',
    },
    {
      title: 'Movix',
      description:
        'A movie/TV discovery platform with cast details, trailers, ratings, and recommendations. Deployed on AWS via Terraform with GitHub Actions CI/CD.',
      tech: ['React', 'TMDB API', 'AWS', 'Terraform', 'GitHub Actions'],
    },
    {
      title: 'Simple Bank',
      description:
        'A secure banking backend with ACID transactions, JWT auth, RBAC, and money-movement workflows. SQLC + Redis + gRPC for high performance.',
      tech: ['Go', 'PostgreSQL', 'gRPC-Gateway', 'SQLC', 'Redis', 'Gin', 'JWT', 'Docker'],
    },
  ],
  skills: [
    { label: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Solidity', 'Java', 'SQL'] },
    { label: 'Backend', items: ['Node.js', 'gRPC', 'GraphQL', 'REST', 'Gin', 'Express'] },
    { label: 'Frontend', items: ['React', 'Next.js', 'CSS Modules', 'HTML5'] },
    { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'ClickHouse', 'Redis', 'DynamoDB'] },
    { label: 'Messaging', items: ['Kafka', 'RabbitMQ', 'Pulsar'] },
    {
      label: 'Cloud & DevOps',
      items: [
        'AWS',
        'Terraform',
        'Docker',
        'Kubernetes',
        'GitHub Actions',
        'Prometheus',
        'Grafana',
      ],
    },
    { label: 'Web3', items: ['Ethereum', 'Hyperledger Fabric', 'Hyperledger Besu', 'Ethers.js'] },
  ],
  certifications: [
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'Cloud Native Computing Foundation',
      verifyUrl: 'https://www.credly.com/badges/fdda768d-2fa7-42c7-b820-158b2a33e6f9',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      verifyUrl: 'https://www.credly.com/badges/e33743ac-4f30-4c77-b4f1-1f7be6fd1690/public_url',
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      verifyUrl: 'https://www.credly.com/badges/192aa999-fc1d-4761-bcf2-a02627a2820a/public_url',
    },
  ],
}
