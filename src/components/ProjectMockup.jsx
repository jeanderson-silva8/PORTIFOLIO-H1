import { useEffect, useRef, useState } from 'react';
import './ProjectMockup.css';

/**
 * Frame de browser com screenshot/vídeo dentro.
 * Vídeo só baixa + toca quando o card entra no viewport (IntersectionObserver),
 * pausa quando sai. Crítico pra performance — sem isso, a home baixa dezenas de MB
 * de vídeo de uma vez.
 */
export default function ProjectMockup({
  src,
  video = null,
  title = '',
  autoScrollOnHover = false,
  variant = 'browser',
}) {
  const [errored, setErrored] = useState(false);
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const loadedRef = useRef(false);

  const initials = (title || 'PRJ')
    .split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();

  /* IntersectionObserver: carrega + toca o vídeo quando entra na tela, pausa ao sair */
  useEffect(() => {
    if (!video || !wrapperRef.current) return;
    const el = wrapperRef.current;
    const v = videoRef.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v) return;
        if (entry.isIntersecting) {
          if (!loadedRef.current) {
            v.load();
            loadedRef.current = true;
          }
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [video]);

  /* Respeita prefers-reduced-motion: não toca vídeo */
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  return (
    <div ref={wrapperRef} className={`mockup mockup--${variant}`}>
      {variant === 'browser' && (
        <div className="mockup-bar" aria-hidden="true">
          <span className="mockup-dot mockup-dot--red" />
          <span className="mockup-dot mockup-dot--yellow" />
          <span className="mockup-dot mockup-dot--green" />
          <span className="mockup-url font-mono">~/{title.toLowerCase().replace(/\s+/g, '-')}</span>
        </div>
      )}

      <div className={`mockup-screen ${autoScrollOnHover ? 'mockup-screen--scroll' : ''}`}>
        {video && !reducedMotion ? (
          <video
            ref={videoRef}
            className="mockup-media"
            src={video}
            poster={src}
            muted
            loop
            playsInline
            preload="none"
            aria-label={`Demo de ${title}`}
          />
        ) : src && !errored ? (
          <img
            className="mockup-media"
            src={src}
            alt={`Preview de ${title}`}
            onError={() => setErrored(true)}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="mockup-placeholder">
            <span className="mockup-placeholder-initials">{initials}</span>
            <span className="mockup-placeholder-label font-mono">
              cover.png · drop em /public/covers/
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
