import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SECONDARY_PROJECTS } from '../data/projects';
import { useTilt } from '../hooks/useTilt';
import Reveal from '../components/Reveal';
import ProjectMockup from '../components/ProjectMockup';
import DualMockup from '../components/DualMockup';
import GithubIcon from '../components/icons/GithubIcon';
import './ProjectsGrid.css';

/**
 * Grid de projetos secundários (não-featured).
 * Cada card tem tilt 3D no hover + auto-scroll do screenshot.
 */
export default function ProjectsGrid() {
  return (
    <section className="pgrid" id="more-work">
      <div className="container">
        <Reveal as="header" className="pgrid-header">
          <p className="pgrid-eyebrow font-mono">
            <span className="pgrid-eyebrow-bracket">[</span>
            02 / Mais trabalho
            <span className="pgrid-eyebrow-bracket">]</span>
          </p>
          <h2 className="pgrid-title">
            Lab, landings e <span className="font-display pgrid-title-accent">estudos.</span>
          </h2>
        </Reveal>

        <Reveal.Group className="pgrid-grid" stagger={0.1}>
          {SECONDARY_PROJECTS.map((project) => (
            <Reveal.Item key={project.id}>
              <TiltCard project={project} />
            </Reveal.Item>
          ))}
        </Reveal.Group>
      </div>
    </section>
  );
}

function TiltCard({ project }) {
  const tiltRef = useTilt({ max: 6, perspective: 1500, scale: 1.015 });

  return (
    <article ref={tiltRef} className="pgrid-card">
      {project.mobileCover ? (
        <DualMockup
          desktopSrc={project.cover}
          mobileSrc={project.mobileCover}
          title={project.title}
        />
      ) : (
        <ProjectMockup
          src={project.cover}
          video={project.videoUrl}
          title={project.title}
          autoScrollOnHover
        />
      )}

      <div className="pgrid-card-body">
        <div className="pgrid-card-tags">
          {project.mainTags.map((t) => (
            <span key={t} className="pgrid-card-tag font-mono">{t}</span>
          ))}
        </div>

        <h3 className="pgrid-card-title">{project.title}</h3>
        <p className="pgrid-card-tagline">{project.tagline}</p>
        <p className="pgrid-card-description">{project.description}</p>

        <div className="pgrid-card-actions">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pgrid-card-link"
            aria-label={`${project.title} — site ao vivo`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} strokeWidth={2.2} />
            <span>Live</span>
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pgrid-card-link"
            aria-label={`${project.title} — código`}
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon size={14} />
            <span>Código</span>
          </a>
          {project.detail && (
            <Link
              to={`/projeto/${project.slug}`}
              className="pgrid-card-link pgrid-card-link--accent"
              aria-label={`${project.title} — case completo`}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Case completo</span>
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
