import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scroll global + sincronia com GSAP ScrollTrigger.
 *
 *  • gsap.ticker dirige o RAF do Lenis (sem dois loops disputando frame)
 *  • lenis.on('scroll') dispara ScrollTrigger.update — animações pinned ficam fluidas
 *  • Instância exposta em window.__lenis pra navbar e CTAs scrollearem programaticamente
 */
export function useLenis() {
  useEffect(() => {
    /* Pula Lenis em dispositivos com reduced-motion (acessibilidade + low-end) */
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false, // touch nativo do iOS é melhor que sintetizado
    });

    window.__lenis = lenis;

    // Lenis avisa o ScrollTrigger sempre que o scroll suaviza
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP ticker dirige o RAF do Lenis (frame único, zero jitter)
    const tickerCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.killAll();
      delete window.__lenis;
    };
  }, []);
}
