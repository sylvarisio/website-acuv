import React from 'react'

// Shared footer grid (logo blurb + link columns + contact) used inside the
// dark CTA blocks and standalone footers across the site.
// `standalone` drops the top margin for pages without a CTA row above (contact).
export default function SiteFooter({ standalone }: { standalone?: boolean }) {
  return (
    <>
      <div
        className="acv-footer"
        style={{
          marginTop: standalone ? '0' : '88px',
          borderTop: '1px solid rgba(159,217,198,.18)',
          paddingTop: '40px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '48px',
          fontSize: '15px',
          lineHeight: '1.8',
          color: 'rgba(234,244,240,.7)',
        }}
      >
        <div>
          <div style={{ marginBottom: '12px' }}>
            <img src="/logo.png" alt="acuv Strategy" style={{ width: '170px', height: 'auto' }} />
          </div>
          From Beirut to New York to the MENA region — bespoke strategy programs backed by finance with integrity.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>QUICK LINKS</div>
          <a href="/services" style={{ color: 'rgba(234,244,240,.7)' }}>Services</a>
          <a href="/success-stories" style={{ color: 'rgba(234,244,240,.7)' }}>Success Stories</a>
          <a href="/thoughts" style={{ color: 'rgba(234,244,240,.7)' }}>Thoughts</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>COMPANY</div>
          <a href="/about" style={{ color: 'rgba(234,244,240,.7)' }}>About Us</a>
          <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.7)' }}>Engagement Model</a>
          <a href="/contact" style={{ color: 'rgba(234,244,240,.7)' }}>Contact Us</a>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>CONTACT</div>
          64 Bleecker St, Suite 405<br />New York, NY 10012<br />+1 (917) 695 4747<br />info@acuvstrategy.com
          <div style={{ marginTop: '14px', display: 'flex', flexWrap: 'wrap', gap: '4px 14px' }}>
            {[
              { href: 'https://www.linkedin.com/company/acuv/', label: 'LinkedIn' },
              { href: 'https://www.instagram.com/acuvstrategy', label: 'Instagram' },
              { href: 'https://www.facebook.com/share/1GQB2jJbSc/', label: 'Facebook' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '5px', whiteSpace: 'nowrap', color: 'rgba(234,244,240,.7)' }}>
                <span>{s.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '48px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(234,244,240,.55)' }}>© 2026 ACUV STRATEGY. ALL RIGHTS RESERVED.</div>
    </>
  )
}
