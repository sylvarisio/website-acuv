import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import AnnouncementBand from '@/components/AnnouncementBand'

export const dynamic = 'force-dynamic'

export default async function Page() {
  let announcement: any = null
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'announcements', where: { featured: { equals: true } }, limit: 1, sort: '-updatedAt' })
    announcement = res.docs[0] || null
  } catch (e) {}
  return (
    <>
<div data-screen-label="Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-220px', top: '-220px', width: '640px', height: '640px', border: '1px solid rgba(159,217,198,.15)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', top: '-140px', width: '480px', height: '480px', border: '1px solid rgba(159,217,198,.12)', borderRadius: '50%' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ height: '24px', width: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: '#EAF4F0' }}>01 HOME</a>
      <a href="/services" style={{ color: 'rgba(234,244,240,.6)' }}>02 SERVICES</a>
      <a href="/about" style={{ color: 'rgba(234,244,240,.6)' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.6)' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: 'rgba(234,244,240,.6)' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'end' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '28px' }}>FROM INSIGHT TO IMPACT</div>
      <div style={{ fontWeight: '300', fontSize: '82px', lineHeight: '1.04', letterSpacing: '-.025em', textWrap: 'pretty' }}>The destination for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>confident growth</span></div>
    </div>
    <p style={{ margin: '0 0 10px', fontSize: '14px', lineHeight: '1.75', color: 'rgba(234,244,240,.6)' }}>From ambiguity to clarity. From hesitation to momentum. Strategy, execution, finance — one credible whole.</p>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '56px 56px 0' }}>
    <div style={{ position: 'relative', height: '400px', background: '#06302A', overflow: 'hidden' }}>
      <DotWave gap={22} amp={16} alpha={1} />
      <div style={{ position: 'absolute', left: '24px', bottom: '20px', fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'rgba(159,217,198,.55)', letterSpacing: '.1em' }}>GENERATIVE BRAND WAVE — SWAP FOR FILM IF PREFERRED</div>
    </div>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '0 56px 36px' }}>
    <div style={{ padding: '36px 36px 0 0', borderRight: '1px solid rgba(159,217,198,.18)' }}><div style={{ fontWeight: '300', fontSize: '52px', letterSpacing: '-.02em' }}>18</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginTop: '8px' }}>COUNTRIES</div></div>
    <div style={{ padding: '36px 36px 0 36px', borderRight: '1px solid rgba(159,217,198,.18)' }}><div style={{ fontWeight: '300', fontSize: '52px', letterSpacing: '-.02em' }}>87</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginTop: '8px' }}>ENGAGEMENTS</div></div>
    <div style={{ padding: '36px 36px 0 36px', borderRight: '1px solid rgba(159,217,198,.18)' }}><div style={{ fontWeight: '300', fontSize: '52px', letterSpacing: '-.02em' }}>59</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginTop: '8px' }}>SECTORS</div></div>
    <div style={{ padding: '36px 0 0 36px' }}><div style={{ fontWeight: '300', fontSize: '52px', letterSpacing: '-.02em' }}>$599M</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6', marginTop: '8px' }}>STRUCTURED CAPITAL</div></div>
  </div>
</div>


<div data-screen-label="Welcome" style={{ position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '40%', backgroundImage: 'radial-gradient(rgba(10,74,63,.14) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000 30%,transparent)', mask: 'linear-gradient(to left,#000 30%,transparent)', animation: 'acv-drift 24s linear infinite' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '104px 56px 0', display: 'grid', gridTemplateColumns: '380px 1fr', gap: '72px' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '20px' }}>WELCOME TO ACUV</div>
      <div style={{ fontSize: '42px', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-.015em' }}>We believe in <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>confident growth</span></div>
      <p style={{ margin: '24px 0 0', fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.6)' }}>Whether you're a multi-generational family business navigating change or an emerging company chasing scale — strategy rooted in realism, execution backed by ownership, finance driven by credibility.</p>
      <a href="/about" style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '13px 24px', borderRadius: '999px', display: 'inline-block' }}>DOWNLOAD COMPANY PROFILE</a>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '44px 200px 1fr', gap: '28px', alignItems: 'baseline', padding: '26px 0', borderTop: '1px solid rgba(18,42,36,.15)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(18,42,36,.4)' }}>01</div>
        <div style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '.06em' }}>MASTERY</div>
        <div style={{ fontSize: '14px', color: 'rgba(18,42,36,.6)' }}>Excellence refined.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '44px 200px 1fr', gap: '28px', alignItems: 'baseline', padding: '26px 0', borderTop: '1px solid rgba(18,42,36,.15)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(18,42,36,.4)' }}>02</div>
        <div style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '.06em' }}>NOVELTY</div>
        <div style={{ fontSize: '14px', color: 'rgba(18,42,36,.6)' }}>Innovation with relevance.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '44px 200px 1fr', gap: '28px', alignItems: 'baseline', padding: '26px 0', borderTop: '1px solid rgba(18,42,36,.15)', borderBottom: '1px solid rgba(18,42,36,.15)' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(18,42,36,.4)' }}>03</div>
        <div style={{ fontSize: '15px', fontWeight: '500', letterSpacing: '.06em' }}>VIGILANCE</div>
        <div style={{ fontSize: '14px', color: 'rgba(18,42,36,.6)' }}>Eyes on the details, ears to the market.</div>
      </div>
    </div>
  </div>
</div>


<AnnouncementBand announcement={announcement} />

<div data-screen-label="Programs" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 56px 0' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em' }}>Strategy programs <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>guiding the journey</span></div>
    <a href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#0E6B5A' }}>ALL SERVICES →</a>
  </div>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
    <a href="/services" style={{ background: '#FFFFFF', border: '1px solid rgba(18,42,36,.1)', padding: '40px 36px', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#122A24' }}>
      <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>A</div>
      <div style={{ fontSize: '22px', fontWeight: '400', marginTop: '8px' }}>Change the Game</div>
      <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Vision clarity for multi-generational family businesses.</p>
      <div style={{ marginTop: 'auto', fontSize: '12px', letterSpacing: '.1em', color: '#0A4A3F', borderBottom: '1px solid #0A4A3F', alignSelf: 'flex-start', paddingBottom: '3px' }}>Explore →</div>
    </a>
    <a href="/services" style={{ background: '#FFFFFF', border: '1px solid rgba(18,42,36,.1)', padding: '40px 36px', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '16px', color: '#122A24' }}>
      <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>B</div>
      <div style={{ fontSize: '22px', fontWeight: '400', marginTop: '8px' }}>Business Engineering</div>
      <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Growth targeting with structure, positioning, and systems.</p>
      <div style={{ marginTop: 'auto', fontSize: '12px', letterSpacing: '.1em', color: '#0A4A3F', borderBottom: '1px solid #0A4A3F', alignSelf: 'flex-start', paddingBottom: '3px' }}>Explore →</div>
    </a>
    <a href="/services" style={{ background: '#0A4A3F', color: '#EAF4F0', padding: '40px 36px', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(159,217,198,.16) 1px,transparent 1px)', backgroundSize: '14px 14px', animation: 'acv-drift 30s linear infinite' }}></div>
      <div style={{ position: 'relative', width: '44px', height: '44px', border: '1px solid #9FD9C6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#9FD9C6' }}>C</div>
      <div style={{ position: 'relative', fontSize: '22px', fontWeight: '400', marginTop: '8px' }}>Launch with Confidence</div>
      <p style={{ position: 'relative', margin: '0', fontSize: '14px', lineHeight: '1.7', color: 'rgba(234,244,240,.65)' }}>Go-to-market plans that turn opportunity into impact.</p>
      <div style={{ position: 'relative', marginTop: 'auto', fontSize: '12px', letterSpacing: '.1em', color: '#9FD9C6', borderBottom: '1px solid #9FD9C6', alignSelf: 'flex-start', paddingBottom: '3px' }}>Explore →</div>
    </a>
  </div>
</div>


<div data-screen-label="Why acuv" style={{ position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '104px 56px 0', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '72px' }}>
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '320px', height: '320px', opacity: '.45' }}><div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'repeating-conic-gradient(rgba(14,107,90,.4) 0deg 0.6deg,transparent 0.6deg 4.5deg)', WebkitMask: 'radial-gradient(circle,transparent 29%,#000 30%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 29%,#000 30%,#000 60%,transparent 61%)', animation: 'acv-spin 110s linear infinite' }}></div></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '20px', textAlign: 'center' }}>WHY ACUV</div>
      <div style={{ position: 'relative', fontSize: '36px', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-.015em', textAlign: 'center' }}>Five reasons clients <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>stay</span></div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '24px 0', borderTop: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Clarity-led transformation</div><div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>We don't just advise — we architect change across strategy, finance, and execution.</div></div>
      <div style={{ padding: '24px 0', borderTop: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Built for business maturity</div><div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Programs that adapt to each growth phase, from ventures to multi-generational enterprises.</div></div>
      <div style={{ padding: '24px 0', borderTop: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Strategy meets finance</div><div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>A dual-core offering bridging strategic vision with financial precision.</div></div>
      <div style={{ padding: '24px 0', borderTop: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Human-centered, impact-driven</div><div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>The emotional architecture of leadership — empathy balanced with execution.</div></div>
      <div style={{ padding: '24px 0', borderTop: '1px solid rgba(18,42,36,.15)', borderBottom: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Proven outcomes</div><div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>32% YoY revenue growth; capital raised 18% above benchmark.</div></div>
    </div>
  </div>
</div>


<div data-screen-label="Proof" style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px 56px 96px' }}>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
    <a href="/success-stories" style={{ border: '1px solid rgba(18,42,36,.12)', background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#122A24' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>SUCCESS STORY</div>
      <div style={{ fontSize: '20px', lineHeight: '1.3' }}>Unlocking Structure for Growth</div>
      <div style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(18,42,36,.6)' }}>Emerging Tech Services — org design, cadence, KPIs.</div>
      <div style={{ marginTop: 'auto', fontSize: '12px', color: '#0A4A3F' }}>Read more →</div>
    </a>
    <a href="/success-stories" style={{ border: '1px solid rgba(18,42,36,.12)', background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#122A24' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>SUCCESS STORY</div>
      <div style={{ fontSize: '20px', lineHeight: '1.3' }}>Raising Capital with Confidence</div>
      <div style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(18,42,36,.6)' }}>FMCG Distributor — investor readiness, valuation integrity.</div>
      <div style={{ marginTop: 'auto', fontSize: '12px', color: '#0A4A3F' }}>Read more →</div>
    </a>
    <a href="/success-stories" style={{ border: '1px solid rgba(18,42,36,.12)', background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#122A24' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>SUCCESS STORY</div>
      <div style={{ fontSize: '20px', lineHeight: '1.3' }}>Turning Friction into Clarity</div>
      <div style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(18,42,36,.6)' }}>Family manufacturer — alignment and legacy transformation.</div>
      <div style={{ marginTop: 'auto', fontSize: '12px', color: '#0A4A3F' }}>Read more →</div>
    </a>
  </div>
  <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '24px' }}>
    <div style={{ background: '#0A4A3F', color: '#EAF4F0', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-90px', bottom: '-90px', width: '260px', height: '260px', background: 'repeating-conic-gradient(rgba(159,217,198,.35) 0deg 0.6deg,transparent 0.6deg 5deg)', borderRadius: '50%', WebkitMask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', animation: 'acv-spin 90s linear infinite' }}></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '26px', lineHeight: '1.45' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
      <div style={{ position: 'relative', marginTop: '16px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: '#9FD9C6' }}>WORDS WE ARE PROUD OF</div>
    </div>
    <a href="/thoughts" style={{ border: '1px solid rgba(18,42,36,.12)', background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#122A24' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>THOUGHTS</div>
      <div style={{ fontSize: '19px', lineHeight: '1.3' }}>Getting Ahead of the Next Stage</div>
      <div style={{ fontSize: '12px', color: 'rgba(18,42,36,.45)' }}>November 2025</div>
      <div style={{ marginTop: 'auto', fontSize: '12px', color: '#0A4A3F' }}>Read more →</div>
    </a>
    <a href="/thoughts" style={{ border: '1px solid rgba(18,42,36,.12)', background: '#fff', padding: '32px', display: 'flex', flexDirection: 'column', gap: '12px', color: '#122A24' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>THOUGHTS</div>
      <div style={{ fontSize: '19px', lineHeight: '1.3' }}>Global Trade in Turbulence</div>
      <div style={{ fontSize: '12px', color: 'rgba(18,42,36,.45)' }}>March 2024</div>
      <div style={{ marginTop: 'auto', fontSize: '12px', color: '#0A4A3F' }}>Read more →</div>
    </a>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '340px', opacity: '.8', WebkitMask: 'linear-gradient(to top,#000 55%,transparent)', mask: 'linear-gradient(to top,#000 55%,transparent)' }}><DotWave gap={26} amp={10} alpha={0.55} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '110px 56px 96px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div style={{ fontWeight: '300', fontSize: '72px', lineHeight: '1.05', letterSpacing: '-.025em' }}>Ready to build<br />something <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>big</span>?</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>Let's turn clarity into momentum — together.</p>
        <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
      </div>
    </div>
    <div style={{ marginTop: '96px', borderTop: '1px solid rgba(159,217,198,.18)', paddingTop: '40px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '48px', fontSize: '13px', lineHeight: '1.8', color: 'rgba(234,244,240,.55)' }}>
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
