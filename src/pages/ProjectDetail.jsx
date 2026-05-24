import { useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, ExternalLink,
  Lightbulb, Wrench, Sparkles, Layers,
} from 'lucide-react';
import { PROJECTS, FEATURED_PROJECTS } from '../data/projects';
import Navbar from '../components/Navbar';
import ProjectMockup from '../components/ProjectMockup';
import CodeBlock from '../components/CodeBlock';
import Reveal from '../components/Reveal';
import GithubIcon from '../components/icons/GithubIcon';
import { reveal, VIEWPORT } from '../hooks/useReveal';
import './ProjectDetail.css';

/**
 * PÁGINA DE DETALHE — usado pra qualquer projeto.
 *  - Hero: título massive + tagline + CTAs Live/Code
 *  - Mockup grande
 *  - Sections: Problema → Solução → Decisões → Aprendizados → Stack
 *  - Bloco de código real
 *  - Próximo projeto (nav)
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Scroll pro topo ao trocar de projeto
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  // Meta dinâmica — React 19 hoista pro <head> (usado em ambos caminhos)
  const pageTitle = `${project.title} — Case study | Jeanderson Silva`;
  const pageDesc = project.tagline;
  const pageUrl = `https://jeanderson.dev/projeto/${project.slug}`;
  const pageImage = `https://jeanderson.dev${project.cover}`;

  const metaTags = (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImage} />
    </>
  );

  // Sem detail estruturado? Mostra fallback enxuto + redireciona ao live
  if (!project.detail) {
    return (
      <>
        {metaTags}
        <Navbar />
        <main className="pd">
          <div className="container pd-fallback">
            <Link to="/" className="pd-back">
              <ArrowLeft size={16} /> Voltar
            </Link>
            <h1 className="pd-fallback-title">{project.title}</h1>
            <p className="pd-fallback-desc">{project.description}</p>
            <p className="pd-fallback-note font-mono">
              Case completo deste projeto em construção. Por enquanto, confira ao vivo:
            </p>
            <div className="pd-fallback-ctas">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta--primary">
                <ExternalLink size={16} /> Ver ao vivo
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta--ghost">
                <GithubIcon size={16} /> Código
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

  // Próximo featured
  const featuredOrder = FEATURED_PROJECTS.map((p) => p.slug);
  const idx = featuredOrder.indexOf(slug);
  const nextSlug = featuredOrder[(idx + 1) % featuredOrder.length];
  const nextProject = PROJECTS.find((p) => p.slug === nextSlug);

  const sampleCode = `// Drag & drop: sincroniza posição otimisticamente
// e reverte se o backend recusar
const moveCard = async (cardId, fromColId, toColId, idx) => {
  const prev = boardState;
  setBoardState((s) => optimisticMove(s, cardId, toColId, idx));

  try {
    await api.cards.move({ cardId, toColId, idx });
  } catch (err) {
    setBoardState(prev);          // rollback
    toast.error('Não foi possível mover o card');
  }
};`;

  return (
    <>
      {metaTags}
      <Navbar />
      <main className="pd">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="pd-hero">
          <div className="container">
            <motion.div
              variants={reveal({ y: 16, duration: 0.6 })}
              initial="hidden"
              animate="visible"
              className="pd-breadcrumb"
            >
              <Link to="/" className="pd-back">
                <ArrowLeft size={14} /> Todos os projetos
              </Link>
              <span className="pd-breadcrumb-sep">/</span>
              <span className="font-mono pd-breadcrumb-current">{project.slug}</span>
            </motion.div>

            <motion.p
              variants={reveal({ y: 20, duration: 0.6, delay: 0.1 })}
              initial="hidden"
              animate="visible"
              className="pd-eyebrow font-mono"
            >
              {project.category === 'saas' ? '· SaaS · Full Stack' : '· Landing · 3D'}
              <span className="pd-eyebrow-sep">/</span>
              Case study
            </motion.p>

            <motion.h1
              variants={reveal({ y: 32, duration: 0.8, delay: 0.15 })}
              initial="hidden"
              animate="visible"
              className="pd-title"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={reveal({ y: 18, duration: 0.6, delay: 0.25 })}
              initial="hidden"
              animate="visible"
              className="pd-tagline"
            >
              {project.tagline}
            </motion.p>

            <motion.div
              variants={reveal({ y: 12, duration: 0.5, delay: 0.35 })}
              initial="hidden"
              animate="visible"
              className="pd-hero-ctas"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta--primary">
                <ExternalLink size={16} /> Ver ao vivo
              </a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="pd-cta pd-cta--ghost">
                <GithubIcon size={16} /> Código
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── MOCKUP HERO ──────────────────────────────────── */}
        <Reveal className="container pd-mockup-wrap" y={48}>
          <ProjectMockup
            src={project.cover}
            video={project.videoUrl}
            title={project.title}
          />
        </Reveal>

        {/* ── PROBLEMA ─────────────────────────────────────── */}
        <Section
          icon={Lightbulb}
          index="01"
          eyebrow="O Problema"
          title="O problema que eu encontrei."
        >
          <p className="pd-prose">{project.detail.problem}</p>
        </Section>

        {/* ── SOLUÇÃO ──────────────────────────────────────── */}
        <Section
          icon={Sparkles}
          index="02"
          eyebrow="A Solução"
          title="Como resolvi."
          variant="accent"
        >
          <p className="pd-prose">{project.detail.solution}</p>
        </Section>

        {/* ── DECISÕES TÉCNICAS ────────────────────────────── */}
        <Section
          icon={Wrench}
          index="03"
          eyebrow="Decisões Técnicas"
          title="Por que escolhi assim."
        >
          <Reveal.Group className="pd-decisions" stagger={0.12}>
            {project.detail.decisions.map((d, i) => (
              <Reveal.Item key={d.title} className="pd-decision">
                <span className="pd-decision-index font-mono">0{i + 1}</span>
                <div className="pd-decision-body">
                  <h4 className="pd-decision-title">{d.title}</h4>
                  <p className="pd-decision-text">{d.body}</p>
                </div>
              </Reveal.Item>
            ))}
          </Reveal.Group>
        </Section>

        {/* ── BLOCO DE CÓDIGO ──────────────────────────────── */}
        <Reveal className="container pd-code-wrap" y={32}>
          <div className="pd-code-header">
            <span className="font-mono pd-code-label">Trecho real do projeto</span>
            <h3 className="pd-code-title">Optimistic updates com rollback</h3>
          </div>
          <CodeBlock filename="src/board/moveCard.ts" language="ts">
            {sampleCode}
          </CodeBlock>
        </Reveal>

        {/* ── APRENDIZADOS ─────────────────────────────────── */}
        <Section
          icon={Layers}
          index="04"
          eyebrow="O que aprendi"
          title="Bagagem que sobrou."
        >
          <p className="pd-prose">{project.detail.learnings}</p>
        </Section>

        {/* ── STACK COMPLETA ──────────────────────────────── */}
        <section className="pd-section">
          <div className="container">
            <Reveal className="pd-stack-header">
              <span className="pd-section-index font-mono">05</span>
              <p className="pd-section-eyebrow font-mono">Stack completa</p>
              <h2 className="pd-section-title">
                Tudo que entra <span className="font-display pd-section-accent">na máquina.</span>
              </h2>
            </Reveal>

            <Reveal.Group className="pd-stack-grid" stagger={0.1}>
              {Object.entries(project.detail.stack).map(([layer, techs]) => (
                <Reveal.Item key={layer} className="pd-stack-col">
                  <h4 className="pd-stack-col-title font-mono">{layer}</h4>
                  <ul className="pd-stack-col-list">
                    {techs.map((t) => (
                      <li key={t} className="pd-stack-col-item font-mono">
                        <span className="pd-stack-bullet" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal.Item>
              ))}
            </Reveal.Group>
          </div>
        </section>

        {/* ── PRÓXIMO PROJETO ──────────────────────────────── */}
        <Reveal className="pd-next">
          <div className="container pd-next-inner">
            <p className="font-mono pd-next-eyebrow">Próximo case</p>
            <Link to={`/projeto/${nextProject.slug}`} className="pd-next-link">
              <h3 className="pd-next-title">{nextProject.title}</h3>
              <span className="pd-next-arrow">
                <ArrowRight size={28} strokeWidth={1.8} />
              </span>
            </Link>
            <p className="pd-next-tagline">{nextProject.tagline}</p>
          </div>
        </Reveal>
      </main>
    </>
  );
}

/* ── Section wrapper interno ────────────────────────────── */
function Section({ icon: Icon, index, eyebrow, title, children, variant = '' }) {
  return (
    <section className={`pd-section ${variant ? `pd-section--${variant}` : ''}`}>
      <div className="container">
        <Reveal className="pd-section-header">
          <span className="pd-section-index font-mono">{index}</span>
          <p className="pd-section-eyebrow font-mono">
            {Icon && <Icon size={14} strokeWidth={2} />}
            {eyebrow}
          </p>
          <h2 className="pd-section-title">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-display pd-section-accent">
              {title.split(' ').slice(-1)}
            </span>
          </h2>
        </Reveal>

        <div className="pd-section-body">{children}</div>
      </div>
    </section>
  );
}
