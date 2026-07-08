import React from 'react'

// Shared footer grid (logo blurb + link columns + contact) used inside the
// dark CTA blocks and standalone footers across the site.
export default function SiteFooter() {
  return (
    <>
      <div
        className="acv-footer"
        style={{
          marginTop: '88px',
          borderTop: '1px solid rgba(159,217,198,.18)',
          paddingTop: '40px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '48px',
          fontSize: '13px',
          lineHeight: '1.8',
          color: 'rgba(234,244,240,.55)',
        }}
      >
        <div>
          <div style={{ marginBottom: '12px' }}>
            <img src="/logo.png" alt="acuv Strategy" style={{ width: '170px', height: 'auto' }} />
          </div>
          From Beirut to New York to the MENA region — bespoke strategy programs backed by finance with integrity.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>QUICK LINKS</div>
          <a href="/services" style={{ color: 'rgba(234,244,240,.55)' }}>Services</a>
          <a href="/success-stories" style={{ color: 'rgba(234,244,240,.55)' }}>Success Stories</a>
          <a href="/thoughts" style={{ color: 'rgba(234,244,240,.55)' }}>Insights &amp; Media</a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>COMPANY</div>
          <a href="/about" style={{ color: 'rgba(234,244,240,.55)' }}>About Us</a>
          <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.55)' }}>Engagement Model</a>
          <a href="/contact" style={{ color: 'rgba(234,244,240,.55)' }}>Contact Us</a>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>CONTACT</div>
          64 Bleecker St, Suite 405<br />New York, NY 10012<br />+1 (917) 695 4747<br />info@acuvstrategy.com
        </div>
      </div>
      <div style={{ marginTop: '48px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.14em', color: 'rgba(234,244,240,.35)' }}>© 2026 ACUV STRATEGY. ALL RIGHTS RESERVED.</div>
    </>
  )
}
