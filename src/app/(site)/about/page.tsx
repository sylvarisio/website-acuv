import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave, LineWave, Rosette } from '@/components/animations'

export const metadata = { title: 'About Us — Acuv Strategy' }
export const dynamic = 'force-dynamic'

export default async function Page() {
  let reportUrl: string | undefined
  try {
    const payload = await getPayload({ config })
    const reportRes = await payload.find({ collection: 'documents', where: { category: { equals: 'report' } }, limit: 1, sort: '-updatedAt' })
    const reportDoc = reportRes.docs[0] as any
    if (reportDoc && reportDoc.file && typeof reportDoc.file === 'object') {
      reportUrl = reportDoc.file.url
    }
  } catch (e) {}

  return (

    <>
<div data-screen-label="About Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '210px', height: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: 'rgba(234,244,240,.6)' }}>01 HOME</a>
      <a href="/services" style={{ color: 'rgba(234,244,240,.6)' }}>02 SERVICES</a>
      <a href="/about" style={{ color: '#EAF4F0' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.6)' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: 'rgba(234,244,240,.6)' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>03 — OUR STORY</div>
    <div style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Building <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>confident growth</span></div>
    <p style={{ margin: '28px 0 0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(234,244,240,.6)', maxWidth: '600px' }}>From Beirut to New York to the MENA region, we guide privately owned businesses to confident growth. We blend market insights with our mastery in business leadership to tailor innovative growth plans.</p>
  </div>
</div>


<div data-screen-label="Globe" style={{ position: 'relative', height: '360px', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '50%', top: '48px', transform: 'translateX(-50%)', width: '1320px', height: '1320px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(23,176,138,.45)', boxShadow: '0 0 90px rgba(23,176,138,.28),inset 0 40px 120px rgba(23,176,138,.18)' }}>
    <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(14,107,90,.55) 1.3px,transparent 1.3px)', backgroundSize: '13px 13px', WebkitMask: 'linear-gradient(to bottom,#000 2%,transparent 25%)', mask: 'linear-gradient(to bottom,#000 2%,transparent 25%)', animation: 'acv-drift 44s linear infinite' }}></div>
    <div style={{ position: 'absolute', inset: '0', background: 'radial-gradient(circle at 50% 4%,rgba(159,217,198,.55),rgba(23,176,138,.18) 9%,transparent 26%)' }}></div>
    <div style={{ position: 'absolute', inset: '52px', borderRadius: '50%', border: '1px solid rgba(23,176,138,.22)' }}></div>
    <div style={{ position: 'absolute', inset: '118px', borderRadius: '50%', border: '1px solid rgba(23,176,138,.15)' }}></div>
    <div style={{ position: 'absolute', inset: '196px', borderRadius: '50%', border: '1px solid rgba(23,176,138,.1)' }}></div>
  </div>
</div>


<div data-screen-label="Clarity" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>01 /<br />CLARITY</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
    <div style={{ fontSize: '34px', fontWeight: '300', lineHeight: '1.3', letterSpacing: '-.015em' }}><span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Clarity</span> over ambiguity. <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Confidence</span> over uncertainty.</div>
    <div style={{ paddingTop: '8px' }}>
      <p style={{ margin: '0', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.65)' }}>We help businesses move from ambiguity to clarity, from insight to action. Whether the business is facing generational friction, scaling ambitions, or financial uncertainty, we architect growth through strategy, execution, and finance.</p>
      <p style={{ margin: '18px 0 0', fontSize: '14.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.65)' }}>We believe real impact begins with clarity in mind backed by measurable milestones through the journey. Our execution services — with our fees tied to results — are a true testament of our dedication to Confident Growth.</p>
    </div>
  </div>
</div>


<div data-screen-label="Journey" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>02 /<br />JOURNEY</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
    <div style={{ padding: '48px 40px 48px 0', borderRight: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2016</div>
      <div style={{ marginTop: '14px', fontSize: '15px', fontWeight: '500' }}>Born in Beirut</div>
      <p style={{ margin: '8px 0 0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>With belief in family business to stabilize economies.</p>
    </div>
    <div style={{ padding: '48px 40px', borderRight: '1px solid rgba(18,42,36,.12)' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2022</div>
      <div style={{ marginTop: '14px', fontSize: '15px', fontWeight: '500' }}>Incorporated in NYC</div>
      <p style={{ margin: '8px 0 0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>As our own mark of global ambitions and defiance.</p>
    </div>
    <div style={{ padding: '48px 0 48px 40px' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2025</div>
      <div style={{ marginTop: '14px', fontSize: '15px', fontWeight: '500' }}>Expanding forward</div>
      <p style={{ margin: '8px 0 0', fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>Into the MENA region to support ambitious visionaries.</p>
    </div>
  </div>
</div>


<div data-screen-label="Numbers" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>03 /<br />NUMBERS</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '0', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
    <div style={{ padding: '40px 36px 40px 0', borderRight: '1px solid rgba(18,42,36,.12)' }}><div style={{ fontWeight: '300', fontSize: '64px', letterSpacing: '-.02em' }}>18</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: 'rgba(18,42,36,.5)', marginTop: '8px' }}>COUNTRIES</div></div>
    <div style={{ padding: '40px 36px', borderRight: '1px solid rgba(18,42,36,.12)' }}><div style={{ fontWeight: '300', fontSize: '64px', letterSpacing: '-.02em' }}>87</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: 'rgba(18,42,36,.5)', marginTop: '8px' }}>ENGAGEMENTS</div></div>
    <div style={{ padding: '40px 36px', borderRight: '1px solid rgba(18,42,36,.12)' }}><div style={{ fontWeight: '300', fontSize: '64px', letterSpacing: '-.02em' }}>59</div><div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: 'rgba(18,42,36,.5)', marginTop: '8px' }}>SECTORS</div></div>
    <div style={{ position: 'relative', padding: '40px 0 40px 36px' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', display: 'flex', pointerEvents: 'none' }}>
        <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'rgba(14,107,90,.1)' }}></div>
        <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'rgba(14,107,90,.18)', marginLeft: '-55px' }}></div>
        <div style={{ width: '110px', height: '110px', borderRadius: '50%', background: 'rgba(14,107,90,.28)', marginLeft: '-55px' }}></div>
      </div>
      <div style={{ position: 'relative', fontWeight: '300', fontSize: '64px', letterSpacing: '-.02em', color: '#0A4A3F' }}>$599M</div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.22em', color: 'rgba(18,42,36,.5)', marginTop: '8px' }}>STRUCTURED CAPITAL</div>
    </div>
  </div>
</div>


<div data-screen-label="Belief" style={{ position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '36%', backgroundImage: 'radial-gradient(rgba(10,74,63,.14) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000 30%,transparent)', mask: 'linear-gradient(to left,#000 30%,transparent)', animation: 'acv-drift 24s linear infinite' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>04 /<br />BELIEF</div>
    <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
      <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '24px' }}>We believe in <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>confident growth</span></div>
      <div style={{ position: 'relative', height: '110px', margin: '0 0 40px', overflow: 'hidden' }}><LineWave /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
        <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '36px 32px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.24em', color: '#0E6B5A', marginBottom: '16px' }}>01 — MASTERY</div>
          <div style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.7)' }}>We refine excellence. From strategy rooms to execution trenches, we bring depth, precision, and relentless craftsmanship to every challenge.</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '36px 32px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.24em', color: '#0E6B5A', marginBottom: '16px' }}>02 — NOVELTY</div>
          <div style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.7)' }}>We innovate with relevance. We don't chase trends — we create solutions that matter, blending tradition with technology to shape the future of business.</div>
        </div>
        <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '36px 32px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.24em', color: '#0E6B5A', marginBottom: '16px' }}>03 — VIGILANCE</div>
          <div style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(18,42,36,.7)' }}>We stay alert. We listen to markets, anticipate shifts, and protect our clients' interests with eyes wide open and ears tuned to nuance.</div>
        </div>
      </div>
      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
        <div style={{ borderTop: '1px solid #122A24', paddingTop: '20px' }}>
          <div style={{ fontSize: '19px', fontWeight: '400', marginBottom: '8px' }}>Bespoke</div>
          <div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>We treat each and every business on its own capabilities to define ambitious yet executable growth strategies.</div>
        </div>
        <div style={{ borderTop: '1px solid #122A24', paddingTop: '20px' }}>
          <div style={{ fontSize: '19px', fontWeight: '400', marginBottom: '8px' }}>Insightful</div>
          <div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>We have deeply explored 46+ categories within Retail and Manufacturing sectors and remain vigilant on emerging trends.</div>
        </div>
        <div style={{ borderTop: '1px solid #122A24', paddingTop: '20px' }}>
          <div style={{ fontSize: '19px', fontWeight: '400', marginBottom: '8px' }}>Guaranteed</div>
          <div style={{ fontSize: '13.5px', lineHeight: '1.7', color: 'rgba(18,42,36,.6)' }}>We put our money where our mouth is and invest our mastery skills into what we believe will reward us all with great returns.</div>
        </div>
      </div>
    </div>
  </div>
</div>


<div data-screen-label="Mission" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>05 /<br />MISSION</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '64px' }}>
      <div style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', width: '300px', height: '300px', opacity: '.7' }}><Rosette stroke="rgba(159,217,198,.35)" /></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#9FD9C6', marginBottom: '20px' }}>OUR MISSION</div>
      <div style={{ position: 'relative', fontSize: '32px', fontWeight: '300', lineHeight: '1.3', maxWidth: '640px' }}>Architecting <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>confidence</span>, executing <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>clarity</span>.</div>
      <p style={{ position: 'relative', margin: '22px 0 0', fontSize: '14.5px', lineHeight: '1.85', color: 'rgba(234,244,240,.7)', maxWidth: '680px' }}>We redefine consulting as a confidence system — where clarity leads, and execution follows. Our mission is to empower family businesses and private enterprises to scale with precision, navigate complexity, and unlock generational value. We reverse the conventional model: strategy is delivered before fees, and success is measured in outcomes, not promises.</p>
    </div>
  </div>
</div>


<div data-screen-label="Partners" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>06 /<br />PARTNERS</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '48px' }}>Meet the <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>partners</span></div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '44px 40px' }}>
        <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'repeating-linear-gradient(-45deg,#0A4A3F 0,#0A4A3F 6px,#0C5347 6px,#0C5347 12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}><span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '.1em', color: '#9FD9C6' }}>PHOTO</span></div>
        <div style={{ fontSize: '22px', fontWeight: '400' }}>Bill Elias Taha</div>
        <div style={{ marginTop: '6px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: '#0E6B5A' }}>FOUNDING PARTNER — STRATEGY &amp; TRANSFORMATION</div>
        <p style={{ margin: '18px 0 0', fontSize: '13.5px', lineHeight: '1.75', color: 'rgba(18,42,36,.65)' }}>Visionary founder, strategic architect, and transformation catalyst with 30+ years across the USA, Europe, and MENA. Bill steers the firm's strategic vision, embedding confidence into every layer of the business — balancing visionary insight with pragmatic delivery.</p>
      </div>
      <div style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '44px 40px' }}>
        <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'repeating-linear-gradient(-45deg,#0A4A3F 0,#0A4A3F 6px,#0C5347 6px,#0C5347 12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}><span style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '.1em', color: '#9FD9C6' }}>PHOTO</span></div>
        <div style={{ fontSize: '22px', fontWeight: '400' }}>Nader Hamoud</div>
        <div style={{ marginTop: '6px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.18em', color: '#0E6B5A' }}>PARTNER — PRIVATE WEALTH STRATEGY &amp; INNOVATION</div>
        <p style={{ margin: '18px 0 0', fontSize: '13.5px', lineHeight: '1.75', color: 'rgba(18,42,36,.65)' }}>With 30+ years in private banking and family office leadership, Nader is a trusted advisor to UHNWI and Family Offices across the Middle East. He leads the firm's private wealth strategy and innovation, integrating AI-driven tools to build legacies that endure.</p>
      </div>
    </div>
  </div>
</div>


<div data-screen-label="Decade" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>07 /<br />DECADE</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '64px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'center' }}>
      <div style={{ position: 'absolute', right: '-160px', top: '50%', transform: 'translateY(-50%)', width: '480px', height: '480px', border: '1px solid rgba(159,217,198,.25)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '370px', height: '370px', border: '1px solid rgba(159,217,198,.2)', borderRadius: '50%' }}></div>
      <div style={{ position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#9FD9C6', marginBottom: '20px' }}>10 YEARS — THE WILL TO WIN</div>
        <div style={{ fontSize: '32px', fontWeight: '300', lineHeight: '1.3', maxWidth: '520px' }}>The story of endurance, impact, and <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>confident growth</span>. Push forward.</div>
        <p style={{ margin: '18px 0 0', fontSize: '14px', lineHeight: '1.75', color: 'rgba(234,244,240,.65)', maxWidth: '480px' }}>Download the report. Own the next decade.</p>
      </div>
      <div style={{ position: 'relative', justifySelf: 'end', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
          <div style={{ position: 'absolute', inset: '-14px', border: '1px dotted rgba(159,217,198,.55)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', inset: '-30px', border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out .9s infinite' }}></div>
          <div style={{ position: 'absolute', inset: '0', border: '1px solid rgba(159,217,198,.6)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '50px', lineHeight: '1', color: '#EAF4F0' }}>10</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9.5px', letterSpacing: '.26em', color: '#9FD9C6' }}>YEARS</div>
          </div>
        </div>
        <a href={reportUrl || '#'} target={reportUrl ? '_blank' : undefined} rel={reportUrl ? 'noopener noreferrer' : undefined} style={{ marginTop: '52px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.12em', color: '#0A4A3F', background: '#9FD9C6', padding: '13px 24px', borderRadius: '999px', display: 'inline-block', opacity: reportUrl ? 1 : 0.5, pointerEvents: reportUrl ? 'auto' : 'none' }}>DOWNLOAD THE REPORT</a>

      </div>
    </div>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Let's make things<br /><span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>happen</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>See how we engage — or start the conversation.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="/engagement-model" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '15px 28px', borderRadius: '999px' }}>ENGAGEMENT MODEL</a>
          <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
        </div>
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
