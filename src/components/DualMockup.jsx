import { useState } from 'react';
import './DualMockup.css';

/**
 * Mockup dual realista — laptop com base trapezoidal + phone à direita.
 * Glow dourado de fundo + labels "Desktop" / "Mobile".
 *
 *  <DualMockup
 *    desktopSrc="/cover.png"
 *    mobileSrc="/cover-mobile.png"
 *    title="Foo"
 *  />
 */
export default function DualMockup({ desktopSrc, mobileSrc, title = '' }) {
  const [deskErr, setDeskErr] = useState(false);
  const [mobErr, setMobErr] = useState(false);

  const initials = (title || 'PRJ')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="dual">
      {/* Glow dourado de fundo */}
      <div className="dual-glow" aria-hidden="true" />

      {/* ── LAPTOP ──────────────────────────────────────── */}
      <div className="dual-laptop">
        <div className="dual-laptop-frame">
          <div className="dual-laptop-bar" aria-hidden="true">
            <span className="dual-dot dual-dot--red" />
            <span className="dual-dot dual-dot--yellow" />
            <span className="dual-dot dual-dot--green" />
          </div>
          <div className="dual-laptop-screen">
            {desktopSrc && !deskErr ? (
              <img
                src={desktopSrc}
                alt={`Preview desktop de ${title}`}
                onError={() => setDeskErr(true)}
                loading="lazy"
                decoding="async"
                className="dual-laptop-img"
              />
            ) : (
              <div className="dual-placeholder">
                <span className="font-display dual-placeholder-initials">{initials}</span>
              </div>
            )}
          </div>
        </div>

        {/* Base trapezoidal do laptop */}
        <div className="dual-laptop-base" aria-hidden="true">
          <div className="dual-laptop-notch" />
        </div>
      </div>

      {/* ── PHONE — sobreposto à direita ────────────────── */}
      <div className="dual-phone">
        <div className="dual-phone-notch" aria-hidden="true" />
        <div className="dual-phone-speaker" aria-hidden="true" />
        <div className="dual-phone-screen">
          {mobileSrc && !mobErr ? (
            <img
              src={mobileSrc}
              alt={`Preview mobile de ${title}`}
              onError={() => setMobErr(true)}
              loading="lazy"
              className="dual-phone-img"
            />
          ) : (
            <div className="dual-placeholder">
              <span className="font-display dual-placeholder-initials">{initials}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── LABELS Desktop / Mobile ─────────────────────── */}
      <div className="dual-labels">
        <span className="dual-label dual-label--desktop">Desktop</span>
        <span className="dual-label dual-label--mobile">Mobile</span>
      </div>
    </div>
  );
}
