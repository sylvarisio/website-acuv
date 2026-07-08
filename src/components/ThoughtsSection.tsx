import React from 'react'

// Renders the Thoughts page featured card + archive list from the CMS.
// thoughts: sorted ascending by tlNumber; the first item is featured.
export default function ThoughtsSection({ thoughts }: { thoughts: any[] }) {
  const list = thoughts || []
  const featured = list[0]
  const rest = list.slice(1)
  const pad = (n: any) => String(n ?? 0).padStart(2, '0')

  return (
    <>
      {featured ? (
        <div className="acv-pad acv-section" data-screen-label="Featured" style={{ maxWidth: 1200, margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>
            01 /<br />
            LATEST
          </div>
          <div style={{ borderTop: '1px solid #122A24', paddingTop: 32 }}>
            <a href={`/thoughts/${featured.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="acv-band acv-duo" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: 64, display: 'grid', gridTemplateColumns: '1fr 240px', gap: 56, alignItems: 'end' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(159,217,198,.12) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }} />
                <div style={{ position: 'absolute', right: -60, top: -60, display: 'flex', opacity: 0.55, pointerEvents: 'none' }}>
                  <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(159,217,198,.12)' }} />
                  <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(159,217,198,.2)', marginLeft: -110 }} />
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '.2em', color: '#9FD9C6', marginBottom: 18 }}>
                    THOUGHT LEADERSHIP — {pad(featured.tlNumber)}
                  </div>
                  <div style={{ fontSize: 40, fontWeight: 300, lineHeight: 1.15, letterSpacing: '-.015em', maxWidth: 620 }}>{featured.title}</div>
                  {featured.excerpt || featured.subtitle ? (
                    <p style={{ margin: '20px 0 0', fontSize: 14.5, lineHeight: 1.8, color: 'rgba(234,244,240,.65)', maxWidth: 540, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {featured.subtitle ? featured.subtitle + '. ' : ''}
                      {featured.excerpt}
                    </p>
                  ) : null}
                </div>
                <div style={{ position: 'relative', justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.12em', color: '#0A4A3F', background: '#9FD9C6', padding: '13px 24px', borderRadius: 999 }}>
                  READ →
                </div>
              </div>
            </a>
          </div>
        </div>
      ) : null}

      <div className="acv-pad acv-section" data-screen-label="Archive" style={{ maxWidth: 1200, margin: '0 auto', padding: '88px 56px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 40 }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>
          02 /<br />
          ARCHIVE
        </div>
        <div style={{ borderTop: '1px solid #122A24', paddingTop: 8, display: 'flex', flexDirection: 'column' }}>
          {rest.map((t) => (
            <a key={t.id} href={`/thoughts/${t.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '100px 1fr 30px', gap: 32, alignItems: 'baseline', padding: '24px 0', borderBottom: '1px solid rgba(18,42,36,.12)' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.1em', color: 'rgba(18,42,36,.45)' }}>TL — {pad(t.tlNumber)}</div>
              <div style={{ fontSize: 22, fontWeight: 400 }}>{t.title}</div>
              <div style={{ color: '#0E6B5A', fontSize: 18 }}>↗</div>
            </a>
          ))}
          {rest.length === 0 ? (
            <div style={{ padding: '24px 0', fontSize: 14, color: 'rgba(18,42,36,.5)' }}>
              More thoughts coming soon.
            </div>
          ) : null}
        </div>
      </div>
    </>
  )
}
