import { DotWave } from '@/components/animations'

export const metadata = { title: 'Services — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Services Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '210px', height: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: 'rgba(234,244,240,.6)' }}>01 HOME</a>
      <a href="/services" style={{ color: '#EAF4F0' }}>02 SERVICES</a>
      <a href="/about" style={{ color: 'rgba(234,244,240,.6)' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.6)' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: 'rgba(234,244,240,.6)' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>02 — SERVICES</div>
    <div style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Programs for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>impact</span>, services for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>scale</span></div>
  </div>
</div>


<div data-screen-label="Programs" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>01 /<br />STRATEGY</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
      <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.85', color: 'rgba(18,42,36,.7)', maxWidth: '620px' }}>Our services are engineered around one goal: Confident Growth. From tailored strategy to financial integrity, we guide business owners with clarity to achieve growth. Our programs are designed according to business maturity stage. Our execution services are a testament of our commitment to achieving results.</p>
      <div style={{ position: 'relative', width: '210px', height: '190px', justifySelf: 'end' }}>
        <div style={{ position: 'absolute', inset: '0', background: '#2FA98C', clipPath: 'polygon(50% 3%, 2% 97%, 50% 66%)', animation: 'acv-tri-l 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: '0', background: '#17705C', clipPath: 'polygon(50% 3%, 98% 97%, 50% 66%)', animation: 'acv-tri-r 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: '0', background: '#7FCBB4', clipPath: 'polygon(2% 97%, 98% 97%, 50% 66%)', animation: 'acv-tri-c 6s ease-in-out infinite' }}></div>
      </div>
    </div>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '40px' }}>Strategy programs <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>guiding the journey</span></div>

    <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 1fr', gap: '40px', padding: '40px 0', borderTop: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>A</div>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Change the Game</div>
        <div style={{ marginTop: '8px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>GUIDING THE JOURNEY</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(18,42,36,.65)' }}>Vision Clarity for multi-generational businesses.</p>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 1fr', gap: '40px', padding: '40px 0', borderTop: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>B</div>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Business Engineering</div>
        <div style={{ marginTop: '8px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>GUIDING THE JOURNEY</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(18,42,36,.65)' }}>Growth Targeting for early-stage ventures.</p>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr 1fr', gap: '40px', padding: '40px 0', borderTop: '1px solid rgba(18,42,36,.12)', borderBottom: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>C</div>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Launch with Confidence</div>
        <div style={{ marginTop: '8px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>GUIDING THE JOURNEY</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(18,42,36,.65)' }}>GTM Success for new markets &amp; products.</p>
      </div>
    </div>
  </div>
</div>


<div data-screen-label="Finance" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>02 /<br />FINANCE</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '16px' }}>Corporate finance <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>services</span></div>
    <p style={{ margin: '0 0 48px', fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.6)', maxWidth: '560px' }}>Our execution services are a testament of our commitment to achieving results.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
      <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>01</div>
        <div style={{ fontSize: '20px' }}>Financial Engineering</div>
        <div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Visibility for decision-making.</div>
      </div>
      <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>02</div>
        <div style={{ fontSize: '20px' }}>Mergers &amp; Acquisitions</div>
        <div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Credibility in every deal.</div>
      </div>
      <div style={{ background: '#0A4A3F', color: '#EAF4F0', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(159,217,198,.16) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }}></div>
        <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#9FD9C6' }}>03</div>
        <div style={{ position: 'relative', fontSize: '20px' }}>Investment &amp; Capital Funding</div>
        <div style={{ position: 'relative', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(234,244,240,.65)' }}>Clarity for growth.</div>
      </div>
    </div>
  </div>
</div>


<div data-screen-label="Engagement teaser" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>03 /<br />MODEL</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: '56px', alignItems: 'center' }}>
    <div>
      <div style={{ fontSize: '32px', fontWeight: '300', letterSpacing: '-.015em' }}>How we engage: <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>insight to impact</span>, with ownership at every step.</div>
      <p style={{ margin: '16px 0 0', fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.6)', maxWidth: '560px' }}>Every program follows the same disciplined arc — see the model that carried 87 engagements across 18 countries.</p>
    </div>
    <a href="/engagement-model" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '14px 26px', borderRadius: '999px' }}>ENGAGEMENT MODEL →</a>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Not sure which<br />program <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>fits</span>?</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>A 30-minute conversation will tell us both.</p>
        <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
      </div>
    </div>
    <div style={{ marginTop: '88px', borderTop: '1px solid rgba(159,217,198,.18)', paddingTop: '40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '48px', fontSize: '13px', lineHeight: '1.8', color: 'rgba(234,244,240,.55)' }}>
      <div>
        <div style={{ marginBottom: '12px' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '170px', height: 'auto' }} /></div>
        From Beirut to New York to the MENA region — bespoke strategy programs backed by finance with integrity.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>QUICK LINKS</div><a href="/services" style={{ color: 'rgba(234,244,240,.55)' }}>Services</a><a href="/success-stories" style={{ color: 'rgba(234,244,240,.55)' }}>Success Stories</a><a href="/thoughts" style={{ color: 'rgba(234,244,240,.55)' }}>Insights &amp; Media</a></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>COMPANY</div><a href="/about" style={{ color: 'rgba(234,244,240,.55)' }}>About Us</a><a href="/engagement-model" style={{ color: 'rgba(234,244,240,.55)' }}>Engagement Model</a><a href="/contact" style={{ color: 'rgba(234,244,240,.55)' }}>Contact Us</a></div>
      <div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '12px' }}>CONTACT</div>64 Bleecker St, Suite 405<br />New York, NY 10012<br />+1 (917) 695 4747<br />info@acuvstrategy.com</div>
    </div>
    <div style={{ marginTop: '48px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.14em', color: 'rgba(234,244,240,.35)' }}>© 2026 ACUV STRATEGY. ALL RIGHTS RESERVED.</div>
  </div>
</div>
    </>
  )
}
