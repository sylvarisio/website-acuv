import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, CtaBand, NumCircle, SectionRail } from '@/components/ui'

export const metadata = { title: 'Engagement Model — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Engagement Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="engagement" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>ENGAGEMENT MODEL</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Beyond advisors — we are <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>doers</span></div>
    <p style={{ margin: '28px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)', maxWidth: '560px' }}>Acuv delivers growth not just theory but through ownership. Our engagement model reflects real commitment — tailored to your journey, your challenge and your ambition.</p>
  </div>
</div>


<SectionRail num="I" label="MODELS" screenLabel="Models">
  <div>
    <div style={{ fontWeight: '300', fontSize: '40px', lineHeight: '1.15', letterSpacing: '-.015em', maxWidth: '720px' }}>Engagement <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>models</span></div>
    <p style={{ margin: '20px 0 48px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)', maxWidth: '640px' }}>Each engagement is rooted in confidence, accountability, and execution. You choose the model that fits your appetite for momentum — we build the outcomes.</p>
    <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--acv-gap)', gridAutoRows: 'minmax(340px, auto)', alignItems: 'stretch' }}>
      <div style={{ background: '#fff', border: '1px solid var(--acv-hairline)', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><NumCircle n={1} /><span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#0E6B5A' }}>MODEL</span></div>
        <div style={{ fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>Do It On Your Own</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.18em', color: 'rgba(18,42,36,.55)' }}>LIMITED INTERVENTION</div>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>For self-led growth journeys. We craft a strategic roadmap with clear priorities and measurable direction. You lead execution with confidence.</p>
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '16px', color: '#0A4A3F' }}>Perfect for founders who want clarity and autonomy.</div>
      </div>
      <div style={{ background: '#fff', border: '1px solid var(--acv-hairline)', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><NumCircle n={2} /><span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#0E6B5A' }}>MODEL</span></div>
        <div style={{ fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>CXO Mandate</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.18em', color: 'rgba(18,42,36,.55)' }}>BUILD TRUST, GAIN CONFIDENCE</div>
        <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>For embedded leadership and shared accountability. We join your team in execution — owning the roadmap, delivering results, and tying our fees to the outcomes you reach.</p>
        <div style={{ marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '16px', color: '#0A4A3F' }}>For businesses who want certainty, trust, and traction.</div>
      </div>
      <div style={{ background: '#0A4A3F', color: '#EAF4F0', border: '1px solid transparent', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '14px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(159,217,198,.16) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }}></div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}><NumCircle n={3} dark /><span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#9FD9C6' }}>MODEL</span></div>
        <div style={{ position: 'relative', fontSize: '23px', fontWeight: '400', lineHeight: '1.25' }}>Sweat for Equity</div>
        <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.18em', color: '#9FD9C6' }}>LIFETIME VALUE CREATION</div>
        <p style={{ position: 'relative', margin: '0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)' }}>For long-term partnerships in impact and scale. We become part of your growth journey — as advisors, operators, and equity partners.</p>
        <div style={{ position: 'relative', marginTop: 'auto', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '16px', color: '#9FD9C6' }}>Ideal for ventures building legacy over the long run.</div>
      </div>
    </div>
  </div>
</SectionRail>


<SectionRail num="II" label="PROOF" screenLabel="Proof point" last>
  <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '56px', alignItems: 'center' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '28px', lineHeight: '1.45', color: '#0A4A3F' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
      <div style={{ marginTop: '14px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: 'rgba(18,42,36,.55)' }}>WORDS WE ARE PROUD OF</div>
    </div>
    <a className="acv-pill" href="/success-stories" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '15px 28px', borderRadius: '16px' }}>SEE THE STORIES →</a>
  </div>
</SectionRail>


<CtaBand
  headline={<>Choose the way we<br /><Accent>work together</Accent></>}
  blurb="Choose your model — we build the outcomes."
  buttons={[{ href: '/contact', label: 'CONTACT US →' }]}
/>
    </>
  )
}
