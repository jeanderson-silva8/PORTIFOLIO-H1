/* ═══════════════════════════════════════════════════════════
   STACK EDITORIAL — visão executiva em 4 colunas
   Cada item aqui tem evidência real nos repositórios públicos.
   Auditado contra github.com/jeanderson-silva8.
   ═══════════════════════════════════════════════════════════ */

export const STACK_COLUMNS = [
  {
    key: 'frontend',
    label: 'Frontend',
    index: '01',
    description: 'Interfaces que respondem na velocidade do pensamento.',
    techs: [
      'React 19',
      'TypeScript',
      'Vite',
      'Three.js · R3F',
      'GLSL Shaders',
      'Tailwind CSS',
      'Framer Motion',
      'GSAP · Lenis',
      'Zustand · TanStack Query',
    ],
    anchor: { label: 'Nexus Portal', slug: 'nexus' },
  },
  {
    key: 'backend',
    label: 'Backend',
    index: '02',
    description: 'APIs robustas, streaming em tempo real e auth de produção.',
    techs: [
      'Node.js',
      'Express v5',
      'Python · Django',
      'Hono · tRPC',
      'GraphQL · Graphene',
      'SSE · Socket.io',
      'JWT · bcrypt',
      'Zod · Validação',
      'Groq SDK · Resend',
    ],
    anchor: { label: 'BrieflyAI', slug: 'brieflyai' },
  },
  {
    key: 'database',
    label: 'Database',
    index: '03',
    description: 'Modelagem que aguenta milhares de linhas sem perder o fôlego.',
    techs: [
      'PostgreSQL',
      'MongoDB Atlas',
      'TiDB Serverless',
      'Mongoose',
      'Drizzle ORM',
      'Django ORM',
      'Modelagem relacional',
      'Modelagem documental',
      'Migrações',
    ],
    anchor: { label: 'Lumina Analytics', slug: 'lumina' },
  },
  {
    key: 'devops',
    label: 'DevOps · Tools',
    index: '04',
    description: 'Do commit ao deploy automatizado, sem fricção.',
    techs: [
      'Docker',
      'GitHub Actions · CI/CD',
      'Vercel · Serverless',
      'Helmet · Rate Limiting',
      'ESLint · Prettier',
      'Vitest',
      'Git · Versionamento',
      '.env · Secrets',
    ],
    anchor: { label: 'FlowSnyker', slug: 'flowsnyker' },
  },
];
