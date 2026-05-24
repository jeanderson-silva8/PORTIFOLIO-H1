import { useEffect, useRef } from 'react';

/**
 * useMagnetic — faz o elemento "puxar" o cursor sutilmente.
 *
 * @param {number} strength  0.0–1.0 — força do magnetismo (default 0.3)
 * @param {number} radius    raio em px onde o efeito ativa (default 120)
 */
export function useMagnetic(strength = 0.3, radius = 120) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (dist < radius) {
          const force = (1 - dist / radius) * strength;
          el.style.transform = `translate(${dx * force}px, ${dy * force}px)`;
        } else {
          el.style.transform = 'translate(0, 0)';
        }
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(rafId);
      el.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength, radius]);

  return ref;
}
