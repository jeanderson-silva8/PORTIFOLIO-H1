/**
 * Variants padronizadas pra reveal on scroll com Framer Motion.
 *
 * Uso típico:
 *   <motion.div variants={reveal()} initial="hidden" whileInView="visible"
 *               viewport={{ once: true, margin: '0px 0px -10% 0px' }}>
 *
 * Stagger:
 *   <motion.ul variants={revealStagger()} initial="hidden" whileInView="visible">
 *     {items.map(it => (
 *       <motion.li key={it.id} variants={revealItem()}>...</motion.li>
 *     ))}
 *   </motion.ul>
 */

const EASE_OUT = [0.22, 1, 0.36, 1];          // ease-out tokens
const EASE_INOUT = [0.65, 0, 0.35, 1];

/* ── Item simples (fade + slide-up) ─────────────────────── */
export const reveal = ({ y = 24, duration = 0.7, delay = 0 } = {}) => ({
  hidden:  { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: EASE_OUT },
  },
});

/* ── Container com stagger nos filhos ────────────────────── */
export const revealStagger = ({
  stagger = 0.15,           // 0.15 padrão pra cards
  delayChildren = 0.05,
} = {}) => ({
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
      ease: EASE_OUT,
    },
  },
});

/* ── Item dentro de um stagger container ─────────────────── */
export const revealItem = ({ y = 28, duration = 0.7 } = {}) => ({
  hidden:  { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE_OUT },
  },
});

/* ── Reveal por palavra (texto curto, tipo título) ───────── */
export const revealWord = () => ({
  hidden:  { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_OUT },
  },
});

export const wordsContainer = ({ stagger = 0.08 } = {}) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger } },
});

/* ── Configuração padrão de viewport ─────────────────────── */
export const VIEWPORT = {
  once: true,
  margin: '0px 0px -12% 0px', // dispara um pouco antes de entrar 100%
};

export const EASES = { EASE_OUT, EASE_INOUT };
