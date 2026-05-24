import { motion } from 'framer-motion';
import { reveal, revealStagger, revealItem, VIEWPORT } from '../hooks/useReveal';

/**
 * <Reveal> — wrapper genérico de fade + slide-up ao entrar na tela.
 *
 *  <Reveal>conteúdo</Reveal>
 *  <Reveal as="h2" delay={0.2} y={40}>título</Reveal>
 *
 * Pra grupos com stagger interno, use <Reveal.Group>...<Reveal.Item>:
 *
 *  <Reveal.Group>
 *    <Reveal.Item>card 1</Reveal.Item>
 *    <Reveal.Item>card 2</Reveal.Item>
 *  </Reveal.Group>
 */
function Reveal({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 24,
  duration = 0.7,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={reveal({ y, duration, delay })}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

function Group({
  children,
  as = 'div',
  className = '',
  stagger = 0.15,
  delayChildren = 0.05,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={revealStagger({ stagger, delayChildren })}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

function Item({
  children,
  as = 'div',
  className = '',
  y = 28,
  duration = 0.7,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={revealItem({ y, duration })}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

Reveal.Group = Group;
Reveal.Item = Item;

export default Reveal;
