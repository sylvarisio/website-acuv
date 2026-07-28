import React from 'react'
import { SectionRail } from './ui'

// Renders the Thoughts page featured card + archive list from the CMS.
// thoughts: sorted descending by tlNumber; the first item (newest) is featured.
export default function ThoughtsSection({ thoughts }: { thoughts: any[] }) {
  const list = thoughts || []
  const featured = list[0]
  const rest = list.slice(1)
  const pad = (n: any) => String(n ?? 0).padStart(2, '0')
  const coverUrl = (t: any) => (t?.cover && typeof t.cover === 'object' ? t.cover.url : null)

  return (
    <>
      {featured ? (
        <SectionRail num="I" label="LATEST" screenLabel="Featured">
          <div>
            <a href={`/thoughts/${featured.slug ?? featured.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="acv-band acv-duo" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: 64, display: 'grid', gridTemplateColumns: '1fr 240px', gap: 56, alignItems: 'end' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(159,217,198,.12) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }} />
                <div style={{ position: 'absolute', right: -60, top: -60, display: 'flex', opacity: 0.55, pointerEvents: 'none' }}>
                  <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(159,217,198,.12)' }} />
                  <div style={{ width: 200, height: 200, borderRadius: '50%', background: 'rgba(159,217,198,.2)', marginLeft: -110 }} />
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.2em', color: '#9FD9C6', marginBottom: 18 }}>
                    THOUGHT LEADERSHIP — {pad(featured.tlNumber)}
                  </div>
                  <div style={{ fontSize: 40, fontWeight: 300, lineHeight: 1.15, letterSpacing: '-.015em', maxWidth: 620 }}>{featured.title}</div>
                  {featured.excerpt || featured.subtitle ? (
                    <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.8, color: 'rgba(234,244,240,.7)', maxWidth: 540, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {featured.subtitle ? featured.subtitle + '. ' : ''}
                      {featured.excerpt}
                    </p>
                  ) : null}
                </div>
                <div style={{ position: 'relative', justifySelf: 'end', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20 }}>
                  {coverUrl(featured) ? (
                    <img src={coverUrl(featured)} alt="" style={{ width: 240, height: 200, objectFit: 'cover', display: 'block' }} />
                  ) : null}
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.12em', color: '#0A4A3F', background: '#9FD9C6', padding: '13px 24px', borderRadius: 16 }}>
                    READ →
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SectionRail>
      ) : null}

      <SectionRail num="II" label="ARCHIVE" screenLabel="Archive" last>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rest.map((t) => (
            <a key={t.id} href={`/thoughts/${t.slug ?? t.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '100px 88px 1fr 30px', gap: 32, alignItems: 'center', padding: '20px 0', borderBottom: '1px solid var(--acv-hairline)' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.14em', color: 'rgba(18,42,36,.55)' }}>TL — {pad(t.tlNumber)}</div>
              {coverUrl(t) ? (
                <img src={coverUrl(t)} alt="" style={{ width: 88, height: 62, objectFit: 'cover', display: 'block' }} />
              ) : (
                <div style={{ width: 88, height: 62, background: '#07332C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: 12, letterSpacing: '.14em', color: '#9FD9C6' }}>{pad(t.tlNumber)}</div>
              )}
              <div style={{ fontSize: 23, fontWeight: 400 }}>{t.title}</div>
              <div style={{ color: '#0E6B5A', fontSize: 18 }}>→</div>
            </a>
          ))}
          {rest.length === 0 ? (
            <div style={{ padding: '24px 0', fontSize: 16, color: 'rgba(18,42,36,.55)' }}>
              More thoughts coming soon.
            </div>
          ) : null}
        </div>
      </SectionRail>
    </>
  )
}
