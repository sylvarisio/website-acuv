import React from 'react'
import SiteFooter from './SiteFooter'

// Shared design-system primitives. Server-compatible (no hooks).
// Tokens live in globals.css :root (--acv-container, --acv-pad-x,
// --acv-section-pad, --acv-gap, --acv-card-pad, --acv-hairline, --acv-rule).

export const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII']

// ---------------------------------------------------------------- NumCircle
// The single in-content numbering style: a roman numeral in a 32px outlined
// circle. Left-rail "I / LABEL" text rails are the only other allowed style.
export function NumCircle({ n, dark }: { n: number; dark?: boolean }) {
  const c = dark ? '#9FD9C6' : '#0E6B5A'
  return (
    <div
      aria-hidden="true"
      style={{ width: '32px', height: '32px', flexShrink: 0, border: `1px solid ${c}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.04em', color: c }}
    >
      {ROMAN[n - 1]}
    </div>
  )
}

// ---------------------------------------------------------------- ArrowLink
// The single text-link style. Arrow rule: → internal navigation, ↗ external
// (socials, downloads) only.
const arrowLinkStyle = (mint?: boolean): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'baseline',
  gap: '8px',
  fontFamily: 'var(--font-sans)',
  fontSize: '13px',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: mint ? '#9FD9C6' : '#0A4A3F',
})

export function ArrowLink({ href, label, external, mint, style }: { href: string; label: string; external?: boolean; mint?: boolean; style?: React.CSSProperties }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ ...arrowLinkStyle(mint), ...style }}
    >
      <span>{label}</span>
      <span aria-hidden="true">{external ? '↗' : '→'}</span>
    </a>
  )
}

// Same visual as ArrowLink but a <span>, for use inside card-level <a> wrappers.
export function ArrowText({ label, mint, external, style }: { label: string; mint?: boolean; external?: boolean; style?: React.CSSProperties }) {
  return (
    <span style={{ ...arrowLinkStyle(mint), ...style }}>
      <span>{label}</span>
      <span aria-hidden="true">{external ? '↗' : '→'}</span>
    </span>
  )
}

// ---------------------------------------------------------------- Pill
export function Pill({ href, label, variant = 'primary', external, style }: { href: string; label: string; variant?: 'primary' | 'outline' | 'compact'; external?: boolean; style?: React.CSSProperties }) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-sans)',
    display: 'inline-block',
    borderRadius: '16px',
    ...(variant === 'compact'
      ? { fontSize: '12px', letterSpacing: '.12em', padding: '13px 24px', color: '#F6F5F1', background: '#0A4A3F' }
      : variant === 'outline'
        ? { fontSize: '13px', letterSpacing: '.14em', padding: '15px 28px', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)' }
        : { fontSize: '13px', letterSpacing: '.14em', padding: '15px 28px', color: '#07332C', background: '#9FD9C6' }),
  }
  return (
    <a
      className="acv-pill"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{ ...base, ...style }}
    >
      {label}
    </a>
  )
}

// ---------------------------------------------------------------- Card
// One card spec: token padding, 20px title, 11px/.2em kicker, 15px body,
// flex column with the link pinned to the bottom edge. `dark` inverts.
export function Card({ href, external, marker, kicker, title, body, linkLabel = 'EXPLORE', dark, children, style }: {
  href?: string
  external?: boolean
  marker?: number
  kicker?: string
  title: React.ReactNode
  body?: React.ReactNode
  linkLabel?: string | null
  dark?: boolean
  children?: React.ReactNode
  style?: React.CSSProperties
}) {
  const outer: React.CSSProperties = {
    background: dark ? '#0A4A3F' : '#FFFFFF',
    color: dark ? '#EAF4F0' : '#122A24',
    border: dark ? '1px solid transparent' : '1px solid var(--acv-hairline)',
    padding: 'var(--acv-card-pad)',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    position: 'relative',
    overflow: 'hidden',
    textDecoration: 'none',
    ...style,
  }
  const content = (
    <>
      {dark ? (
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(159,217,198,.16) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }} />
      ) : null}
      {marker ? <div style={{ position: 'relative' }}><NumCircle n={marker} dark={dark} /></div> : null}
      {kicker ? <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: dark ? '#9FD9C6' : '#0E6B5A' }}>{kicker}</div> : null}
      <div style={{ position: 'relative', fontSize: '20px', fontWeight: '400', lineHeight: '1.3' }}>{title}</div>
      {body ? (
        <p style={{ position: 'relative', margin: '0', fontSize: '15px', lineHeight: '1.8', color: dark ? 'rgba(234,244,240,.7)' : 'rgba(18,42,36,.72)' }}>{body}</p>
      ) : null}
      {children}
      {href && linkLabel ? (
        <ArrowText label={linkLabel} mint={dark} external={external} style={{ position: 'relative', marginTop: 'auto' }} />
      ) : null}
    </>
  )
  return href ? (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} style={outer}>
      {content}
    </a>
  ) : (
    <div style={outer}>{content}</div>
  )
}

// ---------------------------------------------------------------- Stats
// Hero stat strip shared by Home (dark) and About (light): four equal
// columns, left-aligned, one number size, dividers on the grid lines.
export function Stats({ items, dark }: { items: { value: string; label: string }[]; dark?: boolean }) {
  const divider = dark ? '1px solid rgba(159,217,198,.18)' : '1px solid var(--acv-hairline)'
  return (
    <div className="acv-cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {items.map((it, i) => (
        <div key={it.label} style={{ padding: i === 0 ? '36px 36px 36px 0' : '36px', borderLeft: i > 0 ? divider : 'none' }}>
          <div style={{ fontWeight: '300', fontSize: '52px', lineHeight: '1.1', letterSpacing: '-.02em' }}>{it.value}</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: dark ? '#9FD9C6' : 'rgba(18,42,36,.55)', marginTop: '8px' }}>{it.label}</div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------- SectionRail
// One section header: a full-content-width hairline rule at the same x on
// every page, then the 120px roman rail + content grid.
export function SectionRail({ num, label, screenLabel, strong = true, last, children, style }: {
  num: string
  label: string
  screenLabel?: string
  strong?: boolean
  last?: boolean
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  return (
    <div
      className="acv-pad"
      data-screen-label={screenLabel || label}
      style={{ maxWidth: 'var(--acv-container)', margin: '0 auto', padding: `var(--acv-section-pad) var(--acv-pad-x) ${last ? 'var(--acv-section-pad)' : '0'}`, ...style }}
    >
      <div style={{ borderTop: strong ? '1px solid var(--acv-rule)' : '1px solid var(--acv-hairline)' }} />
      <div className="acv-section" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px', paddingTop: '32px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: 'rgba(18,42,36,.55)' }}>
          {num} /<br />
          {label}
        </div>
        <div style={{ minWidth: 0 }}>{children}</div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- CtaBand
// The page-closing dark band: standard two rings, headline + one-line blurb +
// pill buttons, with the shared footer inside.
export function CtaBand({ headline, blurb, buttons, screenLabel = 'CTA' }: {
  headline: React.ReactNode
  blurb: string
  buttons: { href: string; label: string; variant?: 'primary' | 'outline' | 'compact'; external?: boolean }[]
  screenLabel?: string
}) {
  return (
    <div data-screen-label={screenLabel} style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
      <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) var(--acv-section-pad)' }}>
        <div className="acv-cta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
          <div className="acv-h-md" style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>{headline}</div>
          <div className="acv-cta-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--acv-gap)' }}>
            <p style={{ margin: '0', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(234,244,240,.7)', maxWidth: '460px', textAlign: 'right', whiteSpace: 'nowrap' }}>{blurb}</p>
            <div className="acv-cta-actions" style={{ display: 'flex', gap: '16px' }}>
              {buttons.map((b) => (
                <Pill key={b.label} {...b} />
              ))}
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  )
}

// Italic accent span used inside CTA headlines and display headings.
export function Accent({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>{children}</span>
}
