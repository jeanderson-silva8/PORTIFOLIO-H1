import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { PROFILE, FEATURED_PROJECTS } from '../data/projects';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTop = () => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchor = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${href}`);
      return;
    }
    const el = document.querySelector(href);
    if (!el) return;
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(el, { offset: -80 });
    else el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="ft">
      <div className="container ft-inner">
        {/* TOP — Brand massive + back-to-top */}
        <div className="ft-top">
          <Link to="/" className="ft-brand">
            <span className="ft-brand-text">jeanderson</span>
            <span className="ft-brand-accent font-display">.dev</span>
          </Link>

          <button onClick={scrollTop} className="ft-top-btn" aria-label="Voltar ao topo">
            <ArrowUp size={16} strokeWidth={2.2} />
            <span className="font-mono">Topo</span>
          </button>
        </div>

        {/* GRID — colunas */}
        <div className="ft-grid">
          <section className="ft-col">
            <h4 className="ft-col-title font-mono">Navegar</h4>
            <ul className="ft-col-list">
              <li><a href="#projects" className="ft-link" onClick={(e) => handleAnchor(e, '#projects')}>Projetos</a></li>
              <li><a href="#stack"    className="ft-link" onClick={(e) => handleAnchor(e, '#stack')}>Stack</a></li>
              <li><a href="#process"  className="ft-link" onClick={(e) => handleAnchor(e, '#process')}>Processo</a></li>
              <li><a href="#about"    className="ft-link" onClick={(e) => handleAnchor(e, '#about')}>Sobre</a></li>
              <li><a href="#contact"  className="ft-link" onClick={(e) => handleAnchor(e, '#contact')}>Contato</a></li>
            </ul>
          </section>

          <section className="ft-col">
            <h4 className="ft-col-title font-mono">Cases</h4>
            <ul className="ft-col-list">
              {FEATURED_PROJECTS.map((p) => (
                <li key={p.id}>
                  <Link to={`/projeto/${p.slug}`} className="ft-link">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="ft-col">
            <h4 className="ft-col-title font-mono">Canais</h4>
            <ul className="ft-col-list">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="ft-link">Email</a>
              </li>
              <li>
                <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" className="ft-link">WhatsApp</a>
              </li>
              <li>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="ft-link">
                  <LinkedinIcon size={12} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="ft-link">
                  <GithubIcon size={12} /> GitHub
                </a>
              </li>
            </ul>
          </section>

          <section className="ft-col">
            <h4 className="ft-col-title font-mono">Sobre o site</h4>
            <p className="ft-col-text">
              Construído com <span className="ft-tech">React 19</span>,
              <span className="ft-tech"> GSAP</span>,
              <span className="ft-tech"> Framer Motion</span> e
              <span className="ft-tech"> Lenis</span>. Sem templates, sem atalhos.
            </p>
            <p className="ft-col-text-mute font-mono">
              v1.0 · {new Date().getFullYear()}
            </p>
          </section>
        </div>

        {/* BOTTOM — System Operational + copyright */}
        <div className="ft-bottom">
          <div className="ft-status font-mono">
            <span className="ft-status-dot" />
            <span>System Operational</span>
            <span className="ft-status-sep">·</span>
            <span className="ft-status-dim">All systems running</span>
          </div>

          <p className="ft-copy font-mono">
            © {new Date().getFullYear()} {PROFILE.name} — Feito à mão em {PROFILE.location.split('·')[0].trim()}
          </p>
        </div>
      </div>

      {/* MEGA brand backdrop */}
      <div className="ft-mega" aria-hidden="true">
        <span>JEAN.</span>
      </div>
    </footer>
  );
}
