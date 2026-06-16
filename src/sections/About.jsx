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
              Sou um Desenvolvedor Full-Stack obstinado por <strong>código que dura: segurança
              por design, decisões documentadas e interfaces que parecem orgânicas</strong>. Não
              crio apenas protótipos — construo <strong>plataformas que rodam em produção</strong>,
              otimizando do banco de dados até o último pixel.
            </Reveal>

            <Reveal as="p" className="about-paragraph" y={24} delay={0.1}>
              Comecei mexendo com frontend, mergulhei no backend porque queria entender
              o que acontece "do outro lado", e passei por banco e infra porque <strong>produto
              bom é produto inteiro</strong>. Hoje cubro do React 19 com Three.js até o
              PostgreSQL com GraphQL e Docker em produção — e integro IA em produto
              (LLMs via Groq, modelos de imagem com fal.ai) tratando cada chamada de
              modelo como camada crítica: com defesa contra prompt injection, validação
              de output e medição.
            </Reveal>

            <Reveal as="p" className="about-paragraph" y={24} delay={0.2}>
              Acredito que código é tradução de intenção — e que a parte difícil nunca é
              "fazer funcionar", mas <strong>fazer funcionar de um jeito que o próximo dev
              (inclusive o eu de daqui a 6 meses) consiga manter sem chorar</strong>.
            </Reveal>

            <Reveal as="p" className="about-paragraph" y={24} delay={0.25}>
              Por isso desenvolvi um método próprio de auditoria de código: o <strong><a href="https://github.com/jeanderson-silva8/protocolo-de-seguranca" target="_blank" rel="noopener noreferrer" className="about-link-accent">Protocolo
              de Segurança</a></strong> — 61 perguntas-teste versionadas, aplicadas em 10 auditorias
              publicadas. Cada item nasceu de um bug real que encontrei nos meus próprios
              projetos, não de cópia de lista genérica. Eu construo com IA e audito o que
              construo — e cada entrega carrega THREAT_MODEL, ADRs e a parte que quase
              ninguém mostra: o que eu decidi NÃO implementar, e por quê.
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
                  Me tornar um excelente profissional dev, me fez antes disso me tornar profissional em todas as áreas da minha vida: Família, Religião, amigos e Qualidade de vida. É isso que faço quando não estou codando.
                </span>
              </Reveal.Item>
            </Reveal.Group>
          </div>
        </div>
      </div>
    </section>
  );
}
