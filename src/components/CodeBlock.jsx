import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './CodeBlock.css';

/**
 * Bloco de código com header tipo arquivo + botão copiar.
 *
 *  <CodeBlock filename="server/auth.js" language="js">
 *    {`const code = ...`}
 *  </CodeBlock>
 */
export default function CodeBlock({ children, filename = 'snippet', language = 'js' }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      console.warn('clipboard failed', e);
    }
  };

  return (
    <figure className="cb">
      <header className="cb-header">
        <span className="cb-dots" aria-hidden="true">
          <span className="cb-dot cb-dot--red" />
          <span className="cb-dot cb-dot--yellow" />
          <span className="cb-dot cb-dot--green" />
        </span>
        <span className="cb-filename font-mono">{filename}</span>
        <button onClick={copy} className="cb-copy font-mono" aria-label="Copiar código">
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </header>

      <pre className="cb-pre">
        <code className={`cb-code language-${language}`}>{children}</code>
      </pre>
    </figure>
  );
}
