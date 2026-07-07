import React from 'react'

// Renders the homepage news/announcement band from the featured Announcement in the CMS.
// Falls back to the 10-year anniversary content when no announcement is featured.
export default function AnnouncementBand({ announcement }: { announcement?: any }) {
  const a = announcement || {}
  const kicker = a.kicker || '10 YEARS — THE WILL TO WIN'
  const title =
    a.title ||
    'Ten years. 87 engagements. $599M structured capital. One relentless will to transform ambition into legacy.'
  const blurb =
    a.blurb ||
    "Our Anniversary Report is not a look back — it's a launchpad. Endurance, impact, and confident growth. Push forward."
  const buttonLabel = a.buttonLabel || 'DOWNLOAD THE REPORT'
  const pdfUrl = a.pdf && typeof a.pdf === 'object' ? a.pdf.url : undefined
  const emblemTop = a.emblemTop || '10'
  const emblemBottom = a.emblemBottom || 'YEARS'

  return (
    <div data-screen-label="Announcement" style={{ maxWidth: 1200, margin: '0 auto', padding: '104px 56px 0' }}>
      <div
        style={{
          background: '#0A4A3F',
          color: '#EAF4F0',
          position: 'relative',
          overflow: 'hidden',
          padding: '72px 64px',
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 64,
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', right: -160, top: '50%', transform: 'translateY(-50%)', width: 520, height: 520, border: '1px solid rgba(159,217,198,.25)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', right: -100, top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, border: '1px solid rgba(159,217,198,.2)', borderRadius: '50%' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.2em', color: '#9FD9C6', marginBottom: 20, textTransform: 'uppercase' }}>{kicker}</div>
          <div style={{ fontSize: 36, fontWeight: 300, lineHeight: 1.25, maxWidth: 560 }}>{title}</div>
          {blurb ? (
            <p style={{ margin: '20px 0 0', fontSize: 14, lineHeight: 1.75, color: 'rgba(234,244,240,.65)', maxWidth: 520 }}>{blurb}</p>
          ) : null}
        </div>
        <div style={{ position: 'relative', justifySelf: 'end', textAlign: 'center' }}>
          <div style={{ position: 'relative', width: 180, height: 180, margin: '0 auto' }}>
            <div style={{ position: 'absolute', inset: -14, border: '1px dotted rgba(159,217,198,.55)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', inset: -30, border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out .9s infinite' }} />
            <div style={{ position: 'absolute', inset: -46, border: '1px dotted rgba(159,217,198,.2)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out 1.8s infinite' }} />
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(159,217,198,.6)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 56, lineHeight: 1, color: '#EAF4F0' }}>{emblemTop}</div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9.5, letterSpacing: '.26em', color: '#9FD9C6' }}>{emblemBottom}</div>
            </div>
          </div>
          <a
            href={pdfUrl || '#'}
            target={pdfUrl ? '_blank' : undefined}
            style={{ marginTop: 64, fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.12em', color: '#0A4A3F', background: '#9FD9C6', padding: '13px 24px', borderRadius: 999, display: 'inline-block' }}
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </div>
  )
}
