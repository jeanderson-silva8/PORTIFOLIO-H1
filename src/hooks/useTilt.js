import { useEffect, useRef } from 'react';

/**
 * useTilt — inclinação 3D sutil seguindo o cursor.
 *
 * @param {Object} opts
 * @param {number} opts.max         ângulo máximo em graus (default 8)
 * @param {number} opts.perspective em px (default 1400)
 * @param {number} opts.scale       scale on hover (default 1.02)
 * @param {boolean} opts.glare      adicionar reflexo seguindo cursor (default true)
 */
export function useTilt({ max = 8, perspective = 1400, scale = 1.02, glare = true } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let glareEl = null;
    if (glare) {
      glareEl = document.createElement('div');
      glareEl.className = 'tilt-glare';
      el.appendChild(glareEl);
    }

    let rafId;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max;
      const ry = (px - 0.5) * max;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        el.style.transform = `perspective(${perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
        if (glareEl) {
          glareEl.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.12), transparent 55%)`;
          glareEl.style.opacity = '1';
        }
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(rafId);
      el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      if (glareEl) glareEl.style.opacity = '0';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      if (glareEl && glareEl.parentNode === el) el.removeChild(glareEl);
    };
  }, [max, perspective, scale, glare]);

  return ref;
}
