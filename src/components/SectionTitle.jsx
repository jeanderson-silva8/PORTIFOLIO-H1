import { motion } from 'framer-motion';
import { revealStagger, revealItem, revealWord, wordsContainer, VIEWPORT } from '../hooks/useReveal';
import './SectionTitle.css';

/**
 * Padrão de cabeçalho de seção do portfólio.
 *
 *  <SectionTitle
 *    eyebrow="01 / Projetos"
 *    title="Trabalho que está"
 *    accent="em produção."
 *    description="Plataformas reais, com usuários reais."
 *  />
 *
 * O reveal sobe a eyebrow → palavras do título → descrição.
 */
export default function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  align = 'left',
}) {
  const titleWords = title?.split(' ') ?? [];

  return (
    <motion.header
      className={`sect-title sect-title--${align}`}
      variants={revealStagger({ stagger: 0.08, delayChildren: 0 })}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {eyebrow && (
        <motion.p
          className="sect-eyebrow font-mono"
          variants={revealItem({ y: 16, duration: 0.5 })}
        >
          <span className="sect-eyebrow-bracket">[</span>
          {eyebrow}
          <span className="sect-eyebrow-bracket">]</span>
        </motion.p>
      )}

      {title && (
        <motion.h2
          className="sect-heading"
          variants={wordsContainer({ stagger: 0.06 })}
        >
          {titleWords.map((word, i) => (
            <span key={`${word}-${i}`} className="sect-word-mask">
              <motion.span className="sect-word" variants={revealWord()}>
                {word}{i < titleWords.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
          {accent && (
            <>
              {' '}
              <span className="sect-word-mask">
                <motion.span
                  className="sect-word sect-word--accent font-display"
                  variants={revealWord()}
                >
                  {accent}
                </motion.span>
              </span>
            </>
          )}
        </motion.h2>
      )}

      {description && (
        <motion.p
          className="sect-description"
          variants={revealItem({ y: 18, duration: 0.6 })}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
