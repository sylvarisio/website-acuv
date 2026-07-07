import { DotWave } from '@/components/animations'

export const metadata = { title: 'Contact — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Contact Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.7} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ height: '24px', width: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: 'rgba(234,244,240,.6)' }}>01 HOME</a>
      <a href="/services" style={{ color: 'rgba(234,244,240,.6)' }}>02 SERVICES</a>
      <a href="/about" style={{ color: 'rgba(234,244,240,.6)' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.6)' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: 'rgba(234,244,240,.6)' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#07332C', background: '#9FD9C6', border: '1px solid #9FD9C6', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>CONTACT</div>
    <div style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.04', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Let's make things <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>happen</span></div>
  </div>
</div>


<div data-screen-label="Form" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '80px' }}>
  <div>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '32px' }}>START THE CONVERSATION</div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.5)' }}>NAME</label>
        <input type="text" placeholder="Your name" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#122A24', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(18,42,36,.25)', padding: '10px 0', outline: 'none' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.5)' }}>EMAIL</label>
        <input type="email" placeholder="Your email" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#122A24', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(18,42,36,.25)', padding: '10px 0', outline: 'none' }} />
      </div>
      <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.5)' }}>TOPIC</label>
        <input type="text" placeholder="— Choose One —" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#122A24', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(18,42,36,.25)', padding: '10px 0', outline: 'none' }} />
      </div>
      <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.5)' }}>MESSAGE</label>
        <textarea rows="5" placeholder="Where is the ambiguity today?" style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#122A24', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(18,42,36,.25)', padding: '10px 0', outline: 'none', resize: 'vertical' }}></textarea>
      </div>
    </div>
    <div style={{ marginTop: '40px', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#F6F5F1', background: '#0A4A3F', padding: '16px 36px', borderRadius: '999px', display: 'inline-block', cursor: 'pointer' }}>SEND MESSAGE ↗</div>
  </div>
  <div style={{ position: 'relative', borderLeft: '1px solid rgba(18,42,36,.15)', paddingLeft: '56px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
    <div style={{ position: 'absolute', left: '56px', right: '-40px', top: '-20px', bottom: '-20px', backgroundImage: 'radial-gradient(rgba(10,74,63,.09) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000,transparent)', mask: 'linear-gradient(to left,#000,transparent)', animation: 'acv-drift 26s linear infinite', pointerEvents: 'none' }}></div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>OFFICE</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>Suite 405, 64 Bleecker St<br />New York City, NY 10012</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>PHONE</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>New York — +1 (917) 695 4747<br />Europe — +351 (914) 842 008<br />Gulf Region — +971 50 656 3744<br />Lebanon — +961 3 100043</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>EMAIL</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>info@acuvstrategy.com</div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>AROUND THE WEB</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '15px', lineHeight: '1.6' }}>
        <a href="https://www.linkedin.com/company/acuv/">LinkedIn ↗</a>
        <a href="https://www.instagram.com/acuvstrategy">Instagram ↗</a>
        <a href="https://www.facebook.com/share/1GQB2jJbSc/">Facebook ↗</a>
      </div>
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#0E6B5A', marginBottom: '14px' }}>REGIONS</div>
      <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>Beirut · New York · MENA</div>
    </div>
  </div>
</div>


<div data-screen-label="Footer" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '72px 56px 96px' }}>
    <div style={{ borderTop: '1px solid rgba(159,217,198,.18)', paddingTop: '40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '48px', fontSize: '13px', lineHeight: '1.8', color: 'rgba(234,244,240,.55)' }}>
      <div>
        <div style={{ marginBottom: '12px' }}><img src="/logo.png" alt="acuv Strategy" style={{ height: '22px', width: 'auto' }} /></div>
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
