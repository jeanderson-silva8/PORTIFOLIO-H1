import { useState } from 'react';
import { MapPin, Briefcase, Coffee, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import './About.css';

/**
 * SOBRE — humano, curto, com peso pessoal.
 * Foto à esquerda · 3 parágrafos + 1 fato fora-tech à direita.
 */
export default function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="about" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="05 / Sobre"
          title="Por trás dos commits,"
          accent="uma pessoa."
          description="O resumo profissional curto — e três coisas que importam de verdade."
        />

        <div className="about-grid">
          {/* COL ESQUERDA — Foto */}
          <Reveal as="figure" className="about-figure" y={32}>
            <div className="about-photo">
              {PROFILE.photo && !photoError ? (
                <img
                  src={PROFILE.photo}
                  alt={`${PROFILE.name} — ${PROFILE.role}`}
                  className="about-photo-img"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="about-photo-placeholder">
                  <span className="font-display about-photo-initials">JS</span>
                  <span className="font-mono about-photo-label">
                    drop foto em /public/profile.jpeg
                  </span>
                </div>
              )}
            </div>

            <figcaption className="about-figcaption">
              <span className="font-mono about-figcaption-tag">
                <span className="about-figcaption-dot" />
                Disponível
              </span>
              <span className="about-figcaption-name font-display">
                Jeanderson Silva
              </span>
              <span className="about-figcaption-role">{PROFILE.role}</span>
            </figcaption>
          </Reveal>

          {/* COL DIREITA — Texto + meta */}
          <div className="about-text">
            <Reveal as="p" className="about-paragraph" y={24}>
              Sou um Desenvolvedor Full Stack obstinado por <strong>performance
              extrema, segurança por design e interfaces que parecem
              orgânicas</strong>. Não crio apenas protótipos — construo <strong>plataformas
              SaaS prontas para o mundo real</strong>, otimizando do banco até o último pixel.
            </Reveal>

            <Reveal as="p" className="about-paragraph" y={24} delay={0.1}>
              Comecei mexendo com frontend, mergulhei em backend porque
              queria entender o que acontece "do outro lado", passei por
              banco e infra porque <strong>produto bom é produto inteiro</strong>.
              Hoje cubro do React 19 com Three.js até o PostgreSQL com
              GraphQL e Docker em produção.
            </Reveal>

            <Reveal as="p" className="about-paragraph" y={24} delay={0.2}>
              Acredito que código é tradução de intenção — e que a parte
              difícil nunca é "fazer funcionar", mas <strong>fazer funcionar
              de um jeito que o próximo dev (inclusive o eu de daqui a 6
              meses) consiga manter sem chorar</strong>.
            </Reveal>

            <Reveal.Group className="about-meta" stagger={0.1}>
              <Reveal.Item className="about-meta-item">
                <MapPin size={16} className="about-meta-icon" />
                <span className="about-meta-label font-mono">Onde</span>
                <span className="about-meta-value">{PROFILE.location}</span>
              </Reveal.Item>
              <Reveal.Item className="about-meta-item">
                <Briefcase size={16} className="about-meta-icon" />
                <span className="about-meta-label font-mono">Stack</span>
                <span className="about-meta-value">
                  React (TypeScript) · Node (Express/Hono) · Python (Django) · PostgreSQL/MongoDB
                </span>
              </Reveal.Item>
              <Reveal.Item className="about-meta-item">
                <Sparkles size={16} className="about-meta-icon" />
                <span className="about-meta-label font-mono">Foco</span>
                <span className="about-meta-value">
                  IA (Streaming/SSE) · WebGL/3D (GLSL Shaders) · Segurança SaaS
                </span>
              </Reveal.Item>
              <Reveal.Item className="about-meta-item">
                <Coffee size={16} className="about-meta-icon" />
                <span className="about-meta-label font-mono">Fora-tech</span>
                <span className="about-meta-value">
                  Quando não estou codando, geralmente estou pensando em código.
                </span>
              </Reveal.Item>
            </Reveal.Group>
          </div>
        </div>
      </div>
    </section>
  );
}
