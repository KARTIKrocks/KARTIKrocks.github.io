import type { SiteConfig } from '../types'

export const site: SiteConfig = {
  name: 'Kartik Rajput',
  role: 'Software Engineer',
  tagline: 'Distributed systems, observability, and Web3 infrastructure.',
  bio: "I'm a software engineer based in Vadodara, India, building backends in Go and TypeScript. Most recently at Nurdsoft and Middleware (YC-23), where I worked on cloud observability, synthetic monitoring, and large-scale ingestion pipelines. Before that, I spent two years at Tntra building Hyperledger Fabric and Besu-based blockchain systems. On the side, I maintain a handful of open-source Go libraries.",
  socials: [
    { label: 'GitHub', href: 'https://github.com/KARTIKrocks', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajputkartik/', external: true },
  ],
  experience: [
    {
      company: 'Nurdsoft',
      title: 'Software Engineer',
      period: 'Jun 2025 – Nov 2025',
      highlights: [
        'Bookstore.ai — designed a scalable image-processing pipeline generating multi-resolution book images for mobile clients.',
        'Bookstore.ai — built a distributed microservice health-monitoring system tracking uptime, latency, and faults.',
        'Fajardo Trucking — integrated QuickBooks APIs to automate invoicing; added extensive unit tests across service modules.',
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
      title: 'Software Engineer',
      period: 'Jun 2024 – May 2025',
      highlights: [
        'Designed a highly scalable heartbeat-monitoring system enabling enterprise-grade service-uptime analytics.',
        'Implemented low-latency ingestion pipelines feeding real-time health dashboards.',
        'Maintained the Synthetics module and Synthetic Agent — drove reliability, performance, and stable releases.',
      ],
      tech: ['Go', 'React', 'PostgreSQL', 'Pulsar', 'ClickHouse', 'Docker', 'Kubernetes'],
    },
    {
      company: 'Tntra',
      title: 'Software Engineer',
      period: 'Aug 2022 – May 2024',
      highlights: [
        'Reward Point System — built a Hyperledger Fabric network with smart contracts for a consortium of partner institutions.',
        'CBDC System — developed Solidity smart contracts on Hyperledger Besu enabling ERC-20-based token issuance and settlement.',
        'Integrated full observability (Prometheus + Grafana) across both platforms.',
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
        'A platform helping chess students practice structured opening lines assigned by a 2300-rated AGM coach. Built solo end-to-end.',
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
