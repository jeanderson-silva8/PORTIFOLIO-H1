/**
 * Ícone LinkedIn inline (lucide v1 removeu por questão de marca).
 * API igual aos ícones do lucide.
 */
export default function LinkedinIcon({ size = 18, className = '', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10.1H5.67v8.24h2.67ZM7 8.94a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.34 18.34v-4.5c0-2.41-1.29-3.53-3-3.53-1.39 0-2 .77-2.34 1.31v-1.13h-2.67c.04.75 0 8.24 0 8.24h2.67v-4.6c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.34.73 1.34 1.8v4.42h2.55Z" />
    </svg>
  );
}
