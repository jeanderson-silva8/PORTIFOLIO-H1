import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import ProjectsSticky from '../sections/ProjectsSticky';
import ProjectsGrid from '../sections/ProjectsGrid';
import Stack from '../sections/Stack';
import Process from '../sections/Process';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const { hash } = useLocation();

  /**
   * Hash-based scroll após navegação cross-route (ex: /projeto/lumina → /#about).
   *
   * Por que é complexo:
   *  - ProjectsSticky usa GSAP pin com `pinSpacing: false`. Antes desses pins
   *    serem registrados E o ScrollTrigger.refresh() rodar, o offsetTop dos
   *    elementos abaixo do sticky stack não bate com a posição real de scroll.
   *  - Imagens dos mockups + covers carregam de forma assíncrona e empurram layout.
   *  - ScrollToTop dispara em paralelo (jump pra 0) — precisamos rodar DEPOIS dele.
   *
   * Estratégia (em ordem):
   *  1. Aguardar imagens da página carregarem (timeout 1.5s)
   *  2. Aguardar 3 RAFs pra layout estabilizar
   *  3. ScrollTrigger.refresh(true) — recalcula TODOS os triggers com layout final
   *  4. Aguardar mais 1 RAF pro refresh repaint
   *  5. lenis.scrollTo com lock pra impedir interferência do user
   *  6. Verificar pós-animação: se errou em mais de 80px, retry uma vez
   */
  useEffect(() => {
    if (!hash) return;
    const id = hash.startsWith('#') ? hash : `#${hash}`;

    let cancelled = false;

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const raf = () => new Promise((r) => requestAnimationFrame(r));

    const waitForImages = () => {
      const imgs = Array.from(document.images || []).filter((img) => !img.complete);
      if (imgs.length === 0) return Promise.resolve();
      return Promise.race([
        Promise.all(
          imgs.map(
            (img) =>
              new Promise((res) => {
                img.addEventListener('load', res, { once: true });
                img.addEventListener('error', res, { once: true });
              })
          )
        ),
        sleep(1500), // hard cap
      ]);
    };

    const performScroll = () => {
      if (cancelled) return false;
      const el = document.querySelector(id);
      if (!el) return false;

      const lenis = window.__lenis;
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -80,
          duration: 1.2,
          lock: true,            // bloqueia scroll do user durante animação
          force: true,           // ignora animação anterior (do ScrollToTop)
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return true;
    };

    const verifyAndRetry = async () => {
      // Espera animação terminar (~1.3s pra incluir os 1.2s do scrollTo)
      await sleep(1400);
      if (cancelled) return;
      const el = document.querySelector(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Esperado: top do elemento ~80px do topo (offset que pedimos)
      const drift = Math.abs(rect.top - (-(-80))); // = |rect.top - 80|
      if (drift > 80) {
        // Layout shiftou depois do scroll — força nova tentativa
        ScrollTrigger.refresh(true);
        await raf();
        performScroll();
      }
    };

    (async () => {
      await waitForImages();
      if (cancelled) return;

      // 3 RAFs pra garantir layout final (sticky cards, padding, etc.)
      await raf(); await raf(); await raf();
      if (cancelled) return;

      // Pequeno delay pra ScrollToTop terminar seu jump pra 0
      await sleep(60);
      if (cancelled) return;

      // Recalcula TODOS os triggers com layout final
      ScrollTrigger.refresh(true);
      await raf();

      const success = performScroll();
      if (success) verifyAndRetry();
    })();

    return () => { cancelled = true; };
  }, [hash]);

  return (
    <>
      {/* React 19 hoista estes elementos pro <head> automaticamente */}
      <title>Jeanderson Silva — Full Stack Developer</title>
      <meta
        name="description"
        content="Construo plataformas SaaS que rodam em produção. 11 projetos no ar — Lumina Analytics, FlowSnyker, BrieflyAI, Nexus Portal, TrendScope. React, TypeScript, Node, Python."
      />
      <link rel="canonical" href="https://jeanderson.dev/" />

      <Navbar />
      <main>
        <Hero />
        <ProjectsSticky />
        <ProjectsGrid />
        <Stack />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
