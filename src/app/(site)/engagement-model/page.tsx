import { DotWave } from '@/components/animations'

export const metadata = { title: 'Engagement Model — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Engagement Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '210px', height: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: 'rgba(234,244,240,.6)' }}>01 HOME</a>
      <a href="/services" style={{ color: 'rgba(234,244,240,.6)' }}>02 SERVICES</a>
      <a href="/about" style={{ color: 'rgba(234,244,240,.6)' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: '#EAF4F0' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: 'rgba(234,244,240,.6)' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>04 — ENGAGEMENT MODEL</div>
    <div style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Beyond advisors — we are <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>doers</span></div>
    <p style={{ margin: '28px 0 0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(234,244,240,.6)', maxWidth: '560px' }}>Acuv delivers growth not just theory but through ownership. Our engagement model reflects real commitment — tailored to your journey, your challenge and your ambition.</p>
  </div>
</div>


<div data-screen-label="Models" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>01 /<br />MODELS</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ fontWeight: '300', fontSize: '40px', lineHeight: '1.15', letterSpacing: '-.015em', maxWidth: '720px' }}>Engagement <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>models</span></div>
    <p style={{ margin: '20px 0 48px', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.6)', maxWidth: '640px' }}>Each engagement is rooted in confidence, accountability, and execution. You choose the model that fits your appetite for momentum — we build the outcomes.</p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2px', background: 'rgba(18,42,36,.12)', border: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ background: '#fff', padding: '40px 32px', minHeight: '340px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>MODEL I</div>
        <div style={{ fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>Do It On Your Own</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.45)' }}>LIMITED INTERVENTION</div>
        <p style={{ margin: '0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>For self-led growth journeys. We craft a strategic roadmap with clear priorities and measurable direction. You lead execution with confidence.</p>
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '15px', color: '#0A4A3F' }}>Perfect for founders who want clarity and autonomy.</div>
      </div>
      <div style={{ background: '#fff', padding: '40px 32px', minHeight: '340px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>MODEL II</div>
        <div style={{ fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>CXO Mandate</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: 'rgba(18,42,36,.45)' }}>BUILD TRUST, GAIN CONFIDENCE</div>
        <p style={{ margin: '0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>For embedded leadership and shared accountability. We join your team in execution — owning the roadmap, delivering results, and tying our fees to the outcomes you reach.</p>
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '15px', color: '#0A4A3F' }}>For businesses who want certainty, trust, and traction.</div>
      </div>
      <div style={{ background: '#0A4A3F', color: '#EAF4F0', padding: '40px 32px', minHeight: '340px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(159,217,198,.16) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }}></div>
        <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#9FD9C6' }}>MODEL III</div>
        <div style={{ position: 'relative', fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>Sweat for Equity</div>
        <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: '#9FD9C6' }}>LIFETIME VALUE CREATION</div>
        <p style={{ position: 'relative', margin: '0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(234,244,240,.65)' }}>For long-term partnerships in impact and scale. We become part of your growth journey — as advisors, operators, and equity partners.</p>
        <div style={{ position: 'relative', marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '15px', color: '#9FD9C6' }}>Ideal for ventures building legacy over the long run.</div>
      </div>
    </div>
  </div>
</div>


<div data-screen-label="Proof point" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>02 /<br />PROOF</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '56px', alignItems: 'center' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '30px', lineHeight: '1.45', color: '#0A4A3F' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
      <div style={{ marginTop: '14px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: 'rgba(18,42,36,.4)' }}>WORDS WE ARE PROUD OF</div>
    </div>
    <a href="/success-stories" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '14px 26px', borderRadius: '999px' }}>SEE THE STORIES →</a>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', left: '-110px', top: '-110px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle at 38% 35%,#17705C,#07332C 72%)', boxShadow: '0 0 120px rgba(23,176,138,.35)' }}></div>
  <div style={{ position: 'absolute', left: '-140px', top: '-140px', width: '400px', height: '400px', border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 6s ease-in-out infinite' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Ready to build<br />something <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>big</span>?</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>Choose your model — we build the outcomes.</p>
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
