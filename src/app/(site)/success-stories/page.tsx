import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata = { title: 'Success Stories — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Stories Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="stories" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>05 — SUCCESS STORIES</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '820px', textWrap: 'pretty' }}>Impact that is measurable, repeatable, <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>transformative</span></div>
  </div>
</div>


<div className="acv-pad acv-section" data-screen-label="Story 1" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>01 /<br />STORY</div>
  <div className="acv-duo" style={{ borderTop: '1px solid #122A24', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '56px' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '16px' }}>EMERGING TECH SERVICES — STARTUP</div>
      <div style={{ fontSize: '38px', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-.015em' }}>Unlocking Structure for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Growth</span></div>
      <p style={{ margin: '20px 0 0', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.65)', maxWidth: '560px' }}>Org design, operating cadence, and KPI instrumentation — giving a fast-growing services business the structure to scale without losing its speed.</p>
    </div>
    <div style={{ borderLeft: '1px solid rgba(18,42,36,.15)', paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>32%</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: 'rgba(18,42,36,.5)' }}>YOY REVENUE GROWTH</div>
    </div>
  </div>
</div>

<div className="acv-pad acv-section" data-screen-label="Story 2" style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>02 /<br />STORY</div>
  <div className="acv-duo" style={{ borderTop: '1px solid rgba(18,42,36,.25)', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '56px' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '16px' }}>FMCG DISTRIBUTOR — RETAIL</div>
      <div style={{ fontSize: '38px', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-.015em' }}>Raising Capital with <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Confidence</span></div>
      <p style={{ margin: '20px 0 0', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.65)', maxWidth: '560px' }}>Financial transparency, investor readiness, and valuation integrity — turning a transaction into transformational capital.</p>
    </div>
    <div style={{ borderLeft: '1px solid rgba(18,42,36,.15)', paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>+18%</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: 'rgba(18,42,36,.5)' }}>CAPITAL RAISED ABOVE BENCHMARK</div>
    </div>
  </div>
</div>

<div className="acv-pad acv-section" data-screen-label="Story 3" style={{ maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>03 /<br />STORY</div>
  <div className="acv-duo" style={{ borderTop: '1px solid rgba(18,42,36,.25)', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: '56px' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '16px' }}>3RD GEN FAMILY BUSINESS — MANUFACTURING</div>
      <div style={{ fontSize: '38px', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-.015em' }}>Turning Friction into <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Clarity</span></div>
      <p style={{ margin: '20px 0 0', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.65)', maxWidth: '560px' }}>Conflict resolution, strategic alignment, and legacy transformation — family tension into sovereign confidence.</p>
    </div>
    <div style={{ borderLeft: '1px solid rgba(18,42,36,.15)', paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '28px', lineHeight: '1.4', color: '#0A4A3F' }}>Legacy, aligned.</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: 'rgba(18,42,36,.5)' }}>SUCCESSION SECURED</div>
    </div>
  </div>
</div>


<div className="acv-pad" data-screen-label="Quote" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 56px 96px' }}>
  <div className="acv-band" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '80px 64px', textAlign: 'center' }}>
    <div style={{ position: 'absolute', left: '-80px', bottom: '-110px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle at 38% 35%,#17705C,#0A4A3F 72%)', boxShadow: '0 0 90px rgba(23,176,138,.4)' }}></div>
    <div style={{ position: 'absolute', left: '-104px', bottom: '-134px', width: '328px', height: '328px', border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 6s ease-in-out infinite' }}></div>
    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'repeating-conic-gradient(rgba(159,217,198,.35) 0deg 0.6deg,transparent 0.6deg 5deg)', borderRadius: '50%', WebkitMask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', animation: 'acv-spin 90s linear infinite' }}></div>
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '32px', lineHeight: '1.45', maxWidth: '720px', margin: '0 auto' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
    <div style={{ position: 'relative', marginTop: '20px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6' }}>WORDS WE ARE PROUD OF</div>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div className="acv-cta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div className="acv-h-md" style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Your story<br /><span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>next</span>?</div>
      <div className="acv-cta-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>Let's turn clarity into momentum — together.</p>
        <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
      </div>
    </div>
    <SiteFooter />
  </div>
</div>
    </>
  )
}
