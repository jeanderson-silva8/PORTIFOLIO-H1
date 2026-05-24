import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#projects', label: 'Projetos' },
  { href: '#stack',    label: 'Stack' },
  { href: '#process',  label: 'Processo' },
  { href: '#about',    label: 'Sobre' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Páginas de detalhe usam navbar minimalista (só "Voltar aos projetos")
  const isProjectDetail = location.pathname.startsWith('/projeto/');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Brand click: vai pro topo (Hero) — onde quer que esteja */
  const handleBrandClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(0, { duration: 1.2, lock: true });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Se estiver em /projeto/X, deixa o Link navegar pra "/" naturalmente
    // (ScrollToTop em App.jsx cuida do reset)
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
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <Link
          to="/"
          className="nav-brand"
          aria-label="Voltar para o topo"
          onClick={handleBrandClick}
        >
          <span className="nav-brand-mark">J</span>
          <span className="nav-brand-text">jeanderson<span className="nav-brand-dim">.dev</span></span>
        </Link>

        {isProjectDetail ? (
          /* ── Detail page: só botão "Voltar aos projetos" ── */
          <a
            href="#projects"
            className="nav-back"
            onClick={(e) => handleAnchor(e, '#projects')}
          >
            <ArrowLeft size={14} strokeWidth={2.2} />
            <span>Voltar aos projetos</span>
          </a>
        ) : (
          /* ── Home: navbar completa ── */
          <>
            <nav className="nav-links" aria-label="Navegação principal">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  onClick={(e) => handleAnchor(e, l.href)}
                >
                  <span className="nav-bracket">[</span>
                  <span className="nav-link-label">{l.label}</span>
                  <span className="nav-bracket">]</span>
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => handleAnchor(e, '#contact')}
            >
              <span className="nav-status-dot" aria-hidden="true" />
              <span>Disponível</span>
            </a>
          </>
        )}
      </div>
    </header>
  );
}
