import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STACK_COLUMNS } from '../data/stack';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import './Stack.css';

/**
 * STACK EDITORIAL — 4 colunas
 *  Frontend | Backend | Database | DevOps · Tools
 *
 * Cada coluna: índice mono dourado, header, descrição curta,
 * lista vertical de tecnologias e link "ver no projeto".
 */
export default function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <SectionTitle
          eyebrow="03 / Stack completa"
          title="Do banco ao pixel,"
          accent="ponta a ponta."
          description="Não escolho lado — cobro frente, fundo, dados e infra. Cada tecnologia abaixo está em pelo menos um projeto rodando em produção."
        />

        <Reveal.Group className="stack-grid" stagger={0.12}>
          {STACK_COLUMNS.map((col) => (
            <Reveal.Item key={col.key} className="stack-col">
              <header className="stack-col-header">
                <span className="stack-col-index font-mono">{col.index}</span>
                <h3 className="stack-col-label">{col.label}</h3>
              </header>

              <p className="stack-col-description">{col.description}</p>

              <ul className="stack-col-list">
                {col.techs.map((tech) => (
                  <li key={tech} className="stack-col-item font-mono">
                    <span className="stack-col-bullet" aria-hidden="true" />
                    {tech}
                  </li>
                ))}
              </ul>

              <Link
                to={`/projeto/${col.anchor.slug}`}
                className="stack-col-anchor"
              >
                <span className="font-mono">↳ ver no projeto</span>
                <span className="stack-col-anchor-name">{col.anchor.label}</span>
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </Link>
            </Reveal.Item>
          ))}
        </Reveal.Group>

        <Reveal y={20} delay={0.1} className="stack-footnote">
          <p className="font-mono">
            Cada item desta lista aparece em pelo menos um repositório público — auditado em{' '}
            <a
              href="https://github.com/jeanderson-silva8"
              target="_blank"
              rel="noopener noreferrer"
              className="stack-footnote-link"
            >
              github.com/jeanderson-silva8
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
