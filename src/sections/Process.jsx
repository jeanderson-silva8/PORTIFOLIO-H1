import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '../data/process';
import SectionTitle from '../components/SectionTitle';
import './Process.css';

/**
 * PROCESS — Stepper editorial horizontal (vertical no mobile).
 *  • 4 etapas conectadas por linha dourada que cresce conforme entra na tela
 *  • Dots numerados com pulso ao virem visíveis
 *  • Cada step: índice + ícone + título + descrição
 */
export default function Process() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: linha cresce horizontal (esquerda → direita)
      mm.add('(min-width: 901px)', () => {
        gsap.from('.proc-line-fill', {
          scaleX: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proc-stepper',
            start: 'top 75%',
            end: 'bottom 50%',
            scrub: 0.6,
          },
        });
      });

      // Mobile: linha cresce vertical (topo → base)
      mm.add('(max-width: 900px)', () => {
        gsap.from('.proc-line-fill', {
          scaleY: 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proc-stepper',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        });
      });

      // Steps aparecem em cascata
      gsap.from('.proc-step', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proc-stepper',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="proc" id="process">
      <div className="container">
        <SectionTitle
          eyebrow="04 / Como trabalho"
          title="Do problema ao deploy,"
          accent="com método."
          description="Não acredito em inspiração — acredito em processo. Cada projeto que ficou em produção passou por essas quatro etapas."
        />

        <div className="proc-stepper">
          {/* Linha conectora */}
          <div className="proc-line" aria-hidden="true">
            <div className="proc-line-fill" />
          </div>

          {/* Steps */}
          <ol className="proc-steps">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.index} className="proc-step">
                  <div className="proc-step-marker">
                    <span className="proc-step-dot">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <span className="proc-step-index font-mono">{step.index}</span>
                  </div>

                  <h3 className="proc-step-title">{step.title}</h3>
                  <p className="proc-step-short">{step.short}</p>
                  <p className="proc-step-body">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
