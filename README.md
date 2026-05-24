# Portfólio — Jeanderson Silva

Portfólio pessoal de Full Stack Developer. 12 projetos em produção, cases técnicos detalhados, experiência cinematográfica em scroll.

**Live:** https://jeanderson.dev

## Stack

- **React 19** + **Vite 8** + **React Router 7**
- **GSAP** + **ScrollTrigger** + **Lenis** (scroll suave e timelines)
- **Framer Motion** (micro-interações)
- **Lucide React** (ícones)
- CSS puro modular por componente

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produção em /dist
npm run preview  # preview do build
npm run lint
```

## Estrutura

```
src/
  pages/        Home + ProjectDetail (rota /projeto/:slug)
  sections/     Hero, ProjectsSticky, ProjectsGrid, Stack, Process, About, Contact
  components/   Navbar, Footer, Reveal, MagneticButton, ProjectMockup, ...
  data/         projects.js (fonte única de verdade), stack.js, process.js
  hooks/        useLenis, useMagnetic, useReveal
```

## Adicionando um projeto

Edite [src/data/projects.js](src/data/projects.js) — campos obrigatórios: `slug`, `title`, `tagline`, `description`, `category`, `mainTags`, `liveUrl`, `codeUrl`, `cover`. Para entrar no Sticky Stacking, marque `featured: true` e preencha o objeto `detail`.

Lembre de adicionar a URL em [public/sitemap.xml](public/sitemap.xml).

## Deploy

Vercel (SPA fallback automático). `vercel --prod` ou push na main.
