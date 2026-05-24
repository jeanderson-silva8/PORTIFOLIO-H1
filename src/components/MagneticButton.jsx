import { useMagnetic } from '../hooks/useMagnetic';
import './MagneticButton.css';

/**
 * Botão com magnetismo + camada de fundo deslizante no hover.
 *
 * Variantes:
 *  - "primary": fundo champagne, texto preto
 *  - "ghost":   borda sutil, texto marfim
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon = null,
  iconPosition = 'right',
  className = '',
  external = false,
  ...rest
}) {
  const ref = useMagnetic(0.25, 110);

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} strokeWidth={2} />}
      <span className="mb-label">{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} strokeWidth={2} />}
      <span className="mb-fill" aria-hidden="true" />
    </>
  );

  const cls = `mb mb-${variant} ${className}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
