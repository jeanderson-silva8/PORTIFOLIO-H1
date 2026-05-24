import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectMockup from '../components/ProjectMockup';
import GithubIcon from '../components/icons/GithubIcon';
import Reveal from '../components/Reveal';
import './ProjectsSticky.css';

/**
 * Seção de projetos featured — fluxo natural de scroll.
 * Cada card aparece em sequência, sem pin, sem desbote, sem stacking.
 */
export default function ProjectsSticky() {
  return (
    <section className="psticky" id="projects">
      <div className="container psticky-header">
        <SectionTitle
          eyebrow="01 / Projetos em destaque"
          title="Plataformas que rodam"
          accent="em produção."
          description="Não é showcase — é dossiê. Cinco plataformas em produção, com arquitetura e segurança de altíssimo nível, decisões e trade-offs documentados. O que você vê aqui é a verdadeira paixão e prazer em resolver problemas reais. Está pronto?"
        />
      </div>

      <div className="psticky-stack">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal as="article" key={project.id} className="psticky-card" y={48} duration={0.85}>
            <div className="psticky-card-inner">
              <div className="container psticky-card-grid">
                {/* COL ESQUERDA — meta + texto */}
                <div className="psticky-card-text">
                  <div className="psticky-index">
                    <span className="font-mono">0{i + 1}</span>
                    <span className="psticky-index-divider" />
                    <span className="font-mono psticky-index-meta">
                      {project.category === 'saas' ? 'SaaS · Full Stack' : 'Landing · 3D'}
                    </span>
                  </div>

                  <h3 className="psticky-title">{project.title}</h3>

                  <p className="psticky-tagline">{project.tagline}</p>

                  <p className="psticky-description">{project.description}</p>

                  <ul className="psticky-tags">
                    {project.allTags.slice(0, 6).map((tag) => (
                      <li key={tag} className="psticky-tag font-mono">{tag}</li>
                    ))}
                    {project.allTags.length > 6 && (
                      <li className="psticky-tag psticky-tag--more font-mono">
                        +{project.allTags.length - 6}
                      </li>
                    )}
                  </ul>

                  <div className="psticky-actions">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="psticky-cta psticky-cta--primary"
                    >
                      <span>Ver ao vivo</span>
                      <ExternalLink size={16} strokeWidth={2.2} />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="psticky-cta psticky-cta--ghost"
                    >
                      <GithubIcon size={16} />
                      <span>Código</span>
                    </a>
                    {project.detail && (
                      <Link
                        to={`/projeto/${project.slug}`}
                        className="psticky-cta psticky-cta--link"
                      >
                        <span>Case completo</span>
                        <ArrowUpRight size={16} strokeWidth={2.2} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* COL DIREITA — mockup */}
                <div className="psticky-card-visual">
                  <ProjectMockup
                    src={project.cover}
                    video={project.videoUrl}
                    title={project.title}
                    autoScrollOnHover
                  />

                  <div className="psticky-card-badges">
                    {project.badges.map((b) => (
                      <span key={b} className="psticky-badge font-mono">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
