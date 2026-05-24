import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/icons/GithubIcon';
import MagneticButton from '../components/MagneticButton';
import { PROFILE } from '../data/projects';
import './Hero.css';

const ROTATING_TERMS = [
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Three.js',
  'GraphQL',
];

/**
 * HERO — Editorial premium
 *  • Massive background type "DEV." atrás (z-0)
 *  • Headline com word reveal GSAP (z-2)
 *  • Cursor mono que troca tecnologias rotativamente
 *  • CTAs magnéticos + faixa de prova social
 */
export default function Hero() {
  const rootRef = useRef(null);
  const [termIndex, setTermIndex] = useState(0);
  const [displayedTerm, setDisplayedTerm] = useState(ROTATING_TERMS[0]);

  /* ── Word reveal GSAP ─────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('[data-anim="eyebrow"]', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '[data-anim="word"]',
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.95,
            stagger: 0.08,
          },
          '-=0.2'
        )
        .from(
          '[data-anim="mega"]',
          {
            yPercent: 30,
            opacity: 0,
            duration: 1.4,
            ease: 'power4.out',
          },
          '-=1.0'
        )
        .from(
          '[data-anim="sub"]',
          { y: 20, opacity: 0, duration: 0.7 },
          '-=0.6'
        )
        .from(
          '[data-anim="cta"]',
          { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 },
          '-=0.4'
        )
        .from(
          '[data-anim="proof"]',
          { y: 12, opacity: 0, duration: 0.6, stagger: 0.06 },
          '-=0.3'
        )
        .from(
          '[data-anim="indicator"]',
          { y: -10, opacity: 0, duration: 0.5 },
          '-=0.2'
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* ── Cursor rotativo de termos ────────────────────────── */
  useEffect(() => {
    const interval = setInterval(() => {
      setTermIndex((prev) => {
        const next = (prev + 1) % ROTATING_TERMS.length;
        setDisplayedTerm(ROTATING_TERMS[next]);
        return next;
      });
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  /* ── Spotlight: cursor controla CSS vars --mx / --my ──── */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    // Mobile/touch: spotlight off (sem cursor, sem propósito)
    if (window.matchMedia('(hover: none)').matches) return;

    let rafId;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
      });
    };

    el.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    const lenis = window.__lenis;
    if (el && lenis) lenis.scrollTo(el, { offset: -60 });
  };

  return (
    <section ref={rootRef} className="hero" id="hero">
      {/* ── Camadas de fundo (z 0) ─────────────────────────────── */}
      {/* Aurora: blobs dourados em câmera lenta */}
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-aurora-blob hero-aurora-blob--1" />
        <span className="hero-aurora-blob hero-aurora-blob--2" />
        <span className="hero-aurora-blob hero-aurora-blob--3" />
      </div>

      {/* Grid de pontos + spotlight que segue o cursor */}
      <div className="hero-dotgrid" aria-hidden="true" />
      <div className="hero-spotlight" aria-hidden="true" />

      {/* Massive Background Type — assinatura visual (z 1) */}
      <div className="hero-mega" aria-hidden="true">
        <span data-anim="mega">DEV.</span>
      </div>

      <div className="container hero-grid">
        {/* COL ESQUERDA — meta info editorial */}
        <aside className="hero-meta">
          <p className="hero-eyebrow font-mono" data-anim="eyebrow">
            <span className="hero-eyebrow-dot" />
            Disponível para novas oportunidades · {new Date().getFullYear()}
          </p>

          <div className="hero-mini-card font-mono" data-anim="proof">
            <span className="hero-mini-label">Localização</span>
            <span className="hero-mini-value">{PROFILE.location}</span>
          </div>
        </aside>

        {/* COL CENTRO — Headline + CTAs */}
        <div className="hero-main">
          <h1 className="hero-title">
            <span className="hero-line">
              <span className="hero-word" data-anim="word">Desenvolvendo</span>{' '}
              <span className="hero-word" data-anim="word">arquiteturas</span>
            </span>
            <span className="hero-line">
              <span className="hero-word font-display hero-word--accent" data-anim="word">
                full stack
              </span>{' '}
              <span className="hero-word" data-anim="word">com</span>
            </span>
            <span className="hero-line hero-line--rotator">
              <span className="hero-word hero-word--mono" data-anim="word">
                <span className="hero-rotator">
                  <span className="hero-rotator-text" key={displayedTerm}>
                    {displayedTerm}
                  </span>
                  <span className="hero-cursor" aria-hidden="true" />
                </span>
              </span>
            </span>
          </h1>

          <p className="hero-sub" data-anim="sub">
            {PROFILE.stats.inProduction} projetos em produção. SaaS full stack, motores
            analíticos, plataformas de IA em tempo real e experiências 3D — do banco
            até o pixel.
          </p>

          <div className="hero-ctas">
            <span data-anim="cta">
              <MagneticButton
                variant="primary"
                onClick={scrollToProjects}
                icon={ArrowDown}
              >
                Ver projetos
              </MagneticButton>
            </span>
            <span data-anim="cta">
              <MagneticButton
                variant="ghost"
                href={PROFILE.github}
                external
                icon={GithubIcon}
                iconPosition="left"
              >
                GitHub
              </MagneticButton>
            </span>
          </div>
        </div>

        {/* COL DIREITA — stats verticais */}
        <aside className="hero-stats">
          <div className="hero-stat" data-anim="proof">
            <span className="hero-stat-value">{PROFILE.stats.inProduction}</span>
            <span className="hero-stat-label">Em produção</span>
          </div>
          <div className="hero-stat" data-anim="proof">
            <span className="hero-stat-value">{PROFILE.stats.projects}</span>
            <span className="hero-stat-label">Projetos totais</span>
          </div>
          <div className="hero-stat" data-anim="proof">
            <span className="hero-stat-value">Full</span>
            <span className="hero-stat-label">Stack</span>
          </div>
        </aside>
      </div>

      {/* Indicador de scroll */}
      <button
        className="hero-scroll-indicator"
        onClick={scrollToProjects}
        aria-label="Rolar para projetos"
        data-anim="indicator"
      >
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text font-mono">scroll</span>
        <ArrowDown size={14} />
      </button>

      {/* Faixa inferior de prova social */}
      <div className="hero-marquee" data-anim="proof">
        <div className="hero-marquee-inner">
          {[
            'React 19',
            'TypeScript',
            'Node.js',
            'MongoDB',
            'PostgreSQL',
            'GraphQL',
            'Three.js',
            'Docker',
            'Vercel',
            'GSAP',
            'Framer Motion',
            'Tailwind',
          ].map((tech) => (
            <span key={tech} className="hero-marquee-item">
              <ArrowUpRight size={12} /> {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
