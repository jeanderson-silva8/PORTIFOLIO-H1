import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.css';

/**
 * MANIFESTO — declaração de contraste editorial.
 *
 *  "A maioria dos devs entrega: código que funciona."  (neutro, menor)
 *  "Eu entrego produtos que escalam, têm gosto e duram."  (massivo, drama)
 *
 * Reveal palavra por palavra com GSAP, scrubado conforme entra na tela.
 */
export default function Manifesto() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const setup = (selector) => {
        const el = rootRef.current?.querySelector(selector);
        if (!el) return;

        // Quebra em palavras preservando espaços
        const words = el.textContent.trim().split(/\s+/);
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="mf-word-mask"><span class="mf-word">${w}</span></span> `
          )
          .join('');

        gsap.from(el.querySelectorAll('.mf-word'), {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      };

      setup('[data-manifesto="quiet"]');
      setup('[data-manifesto="loud"]');

      // Linha divisora cresce
      gsap.from('.mf-divider', {
        scaleX: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mf-divider',
          start: 'top 80%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="mf" id="manifesto">
      {/* Textura de fundo (parallax sutil via background-attachment) */}
      <div className="mf-bg" aria-hidden="true" />
      <div className="mf-glow" aria-hidden="true" />

      <div className="container mf-inner">
        <p className="mf-eyebrow font-mono">
          <span className="mf-eyebrow-bracket">[</span>
          04 / Manifesto
          <span className="mf-eyebrow-bracket">]</span>
        </p>

        <p className="mf-quiet" data-manifesto="quiet">
          A maioria dos devs entrega código que funciona.
        </p>

        <span className="mf-divider" aria-hidden="true" />

        <h2 className="mf-loud font-display">
          <span data-manifesto="loud">
            Eu entrego produtos que escalam, têm gosto e duram.
          </span>
        </h2>

        <p className="mf-signature font-mono">
          <span className="mf-signature-line" />
          <span>jeanderson.dev · 2026</span>
        </p>
      </div>
    </section>
  );
}
