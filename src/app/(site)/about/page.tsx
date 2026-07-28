import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave, LineWave, Rosette } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import { Accent, Card, CtaBand, SectionRail, Stats } from '@/components/ui'

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
<div data-screen-label="About Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="about" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px var(--acv-pad-x) 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>OUR STORY</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Building <Accent>confident growth</Accent></div>
    <p style={{ margin: '28px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)', maxWidth: '600px' }}>From Beirut to New York to the MENA region, we guide privately owned businesses to confident growth. We blend market insights with our mastery in business leadership to tailor innovative growth plans.</p>
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


<SectionRail num="I" label="CLARITY" screenLabel="Clarity" style={{ padding: '64px var(--acv-pad-x) 0' }}>
  <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', lineHeight: '1.3', letterSpacing: '-.015em' }}><span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Clarity</span> over ambiguity. <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>Confidence</span> over uncertainty.</div>
    <div style={{ paddingTop: '8px' }}>
      <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We help businesses move from ambiguity to clarity, from insight to action. Whether the business is facing generational friction, scaling ambitions, or financial uncertainty, we architect growth through strategy, execution, and finance.</p>
      <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We believe real impact begins with clarity in mind backed by measurable milestones through the journey. Our execution services — with our fees tied to results — are a true testament of our dedication to Confident Growth.</p>
    </div>
  </div>
</SectionRail>


<SectionRail num="II" label="JOURNEY" screenLabel="Journey">
  <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
    <div style={{ padding: '16px 40px 0 0', borderRight: '1px solid var(--acv-hairline)' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2016</div>
      <div style={{ marginTop: '14px', fontSize: '16px', fontWeight: '500' }}>Born in Beirut</div>
      <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>With belief in family business to stabilize economies.</p>
    </div>
    <div style={{ padding: '16px 40px 0', borderRight: '1px solid var(--acv-hairline)' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2022</div>
      <div style={{ marginTop: '14px', fontSize: '16px', fontWeight: '500' }}>Incorporated in NYC</div>
      <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>As our own mark of global ambitions and defiance.</p>
    </div>
    <div style={{ padding: '16px 0 0 40px' }}>
      <div style={{ fontWeight: '300', fontSize: '56px', letterSpacing: '-.02em', color: '#0A4A3F' }}>2025</div>
      <div style={{ marginTop: '14px', fontSize: '16px', fontWeight: '500' }}>Expanding forward</div>
      <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>Into the MENA region to support ambitious visionaries.</p>
    </div>
  </div>
</SectionRail>


<SectionRail num="III" label="NUMBERS" screenLabel="Numbers">
  <Stats
    items={[
      { value: '18', label: 'COUNTRIES' },
      { value: '87', label: 'ENGAGEMENTS' },
      { value: '59', label: 'SECTORS' },
      { value: '$599M', label: 'STRUCTURED CAPITAL' },
    ]}
  />
</SectionRail>


<div data-screen-label="Belief" style={{ position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '36%', backgroundImage: 'radial-gradient(rgba(10,74,63,.14) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000 30%,transparent)', mask: 'linear-gradient(to left,#000 30%,transparent)', animation: 'acv-drift 24s linear infinite' }}></div>
  <SectionRail num="IV" label="BELIEF" style={{ position: 'relative' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '24px' }}>We believe in <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>confident growth</span></div>
    <div style={{ position: 'relative', height: '110px', margin: '0 0 40px', overflow: 'hidden' }}><LineWave /></div>
    <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(260px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
      <Card marker={1} title="Mastery" body="We refine excellence. From strategy rooms to execution trenches, we bring depth, precision, and relentless craftsmanship to every challenge." />
      <Card marker={2} title="Novelty" body="We innovate with relevance. We don't chase trends — we create solutions that matter, blending tradition with technology to shape the future of business." />
      <Card marker={3} title="Vigilance" body="We stay alert. We listen to markets, anticipate shifts, and protect our clients' interests with eyes wide open and ears tuned to nuance." />
    </div>
    <div className="acv-cols-3" style={{ marginTop: 'var(--acv-gap)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--acv-gap)' }}>
      <div style={{ borderTop: '1px solid var(--acv-rule)', padding: '20px 32px 0' }}>
        <div style={{ fontSize: '20px', fontWeight: '400', marginBottom: '8px' }}>Bespoke</div>
        <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We treat each and every business on its own capabilities to define ambitious yet executable growth strategies.</div>
      </div>
      <div style={{ borderTop: '1px solid var(--acv-rule)', padding: '20px 32px 0' }}>
        <div style={{ fontSize: '20px', fontWeight: '400', marginBottom: '8px' }}>Insightful</div>
        <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We have deeply explored 46+ categories within Retail and Manufacturing sectors and remain vigilant on emerging trends.</div>
      </div>
      <div style={{ borderTop: '1px solid var(--acv-rule)', padding: '20px 32px 0' }}>
        <div style={{ fontSize: '20px', fontWeight: '400', marginBottom: '8px' }}>Guaranteed</div>
        <div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We put our money where our mouth is and invest our mastery skills into what we believe will reward us all with great returns.</div>
      </div>
    </div>
  </SectionRail>
</div>


<SectionRail num="V" label="MISSION" screenLabel="Mission">
  <div className="acv-band" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '64px' }}>
    <div style={{ position: 'absolute', right: '-40px', top: '50%', transform: 'translateY(-50%)', width: '300px', height: '300px', opacity: '.7' }}><Rosette stroke="rgba(159,217,198,.35)" /></div>
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#9FD9C6', marginBottom: '20px' }}>OUR MISSION</div>
    <div style={{ position: 'relative', fontSize: '36px', fontWeight: '300', lineHeight: '1.3', maxWidth: '640px' }}>Architecting <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>confidence</span>, executing <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>clarity</span>.</div>
    <p style={{ position: 'relative', margin: '22px 0 0', fontSize: '16px', lineHeight: '1.85', color: 'rgba(234,244,240,.7)', maxWidth: '680px' }}>We redefine consulting as a confidence system — where clarity leads, and execution follows. Our mission is to empower family businesses and private enterprises to scale with precision, navigate complexity, and unlock generational value. We reverse the conventional model: strategy is delivered before fees, and success is measured in outcomes, not promises.</p>
  </div>
</SectionRail>


<SectionRail num="VI" label="PARTNERS" screenLabel="Partners">
  <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '48px' }}>Meet the <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>partners</span></div>
  <div className="acv-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
    <Card title="Bill Elias Taha" linkLabel={null} body="Visionary founder, strategic architect, and transformation catalyst with 30+ years across the USA, Europe, and MENA. Bill steers the firm's strategic vision, embedding confidence into every layer of the business — balancing visionary insight with pragmatic delivery.">
      <div style={{ position: 'relative', order: -1, width: '88px', height: '88px', borderRadius: '50%', background: 'repeating-linear-gradient(-45deg,#0A4A3F 0,#0A4A3F 6px,#0C5347 6px,#0C5347 12px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#9FD9C6' }}>PHOTO</span></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.18em', color: '#0E6B5A' }}>FOUNDING PARTNER — STRATEGY &amp; TRANSFORMATION</div>
    </Card>
    <Card title="Nader Hamoud" linkLabel={null} body="With 30+ years in private banking and family office leadership, Nader is a trusted advisor to UHNWI and Family Offices across the Middle East. He leads the firm's private wealth strategy and innovation, integrating AI-driven tools to build legacies that endure.">
      <div style={{ position: 'relative', order: -1, width: '88px', height: '88px', borderRadius: '50%', background: 'repeating-linear-gradient(-45deg,#0A4A3F 0,#0A4A3F 6px,#0C5347 6px,#0C5347 12px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#9FD9C6' }}>PHOTO</span></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.18em', color: '#0E6B5A' }}>PARTNER — PRIVATE WEALTH STRATEGY &amp; INNOVATION</div>
    </Card>
  </div>
</SectionRail>


<SectionRail num="VII" label="DECADE" screenLabel="Decade" last>
  <div className="acv-band acv-duo" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '64px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'center' }}>
    <div style={{ position: 'absolute', right: '-160px', top: '50%', transform: 'translateY(-50%)', width: '480px', height: '480px', border: '1px solid rgba(159,217,198,.25)', borderRadius: '50%' }}></div>
    <div style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '370px', height: '370px', border: '1px solid rgba(159,217,198,.2)', borderRadius: '50%' }}></div>
    <div style={{ position: 'relative' }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#9FD9C6', marginBottom: '20px' }}>10 YEARS — THE WILL TO WIN</div>
      <div style={{ fontSize: '36px', fontWeight: '300', lineHeight: '1.3', maxWidth: '520px' }}>The story of endurance, impact, and <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#9FD9C6' }}>confident growth</span>. Push forward.</div>
      <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)', maxWidth: '480px' }}>Download the report. Own the next decade.</p>
    </div>
    <div style={{ position: 'relative', justifySelf: 'end', textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto' }}>
        <div style={{ position: 'absolute', inset: '-14px', border: '1px dotted rgba(159,217,198,.55)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: '-30px', border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 5.5s ease-in-out .9s infinite' }}></div>
        <div style={{ position: 'absolute', inset: '0', border: '1px solid rgba(159,217,198,.6)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '50px', lineHeight: '1', color: '#EAF4F0' }}>10</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6' }}>YEARS</div>
        </div>
      </div>
      <a className="acv-pill" href={reportUrl || '#'} target={reportUrl ? '_blank' : undefined} rel={reportUrl ? 'noopener noreferrer' : undefined} style={{ marginTop: '52px', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.12em', color: '#0A4A3F', background: '#9FD9C6', padding: '13px 24px', borderRadius: '16px', display: 'inline-block', opacity: reportUrl ? 1 : 0.5, pointerEvents: reportUrl ? 'auto' : 'none' }}>DOWNLOAD THE REPORT ↗</a>
    </div>
  </div>
</SectionRail>


<CtaBand
  headline={<>Let's make things<br /><Accent>happen</Accent></>}
  blurb="See how we engage — or start the conversation."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
