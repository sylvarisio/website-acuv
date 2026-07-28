import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, Card, CtaBand, NumCircle, SectionRail } from '@/components/ui'

export const metadata = { title: 'Services — Acuv Strategy' }

export default function Page() {
  return (
    <>
<div data-screen-label="Services Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="services" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>SERVICES</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>Programs for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>impact</span>, services for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>scale</span></div>
  </div>
</div>


<SectionRail num="I" label="STRATEGY" screenLabel="Programs">
  <div>
    <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: '64px', alignItems: 'center', marginBottom: '64px' }}>
      <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.85', color: 'rgba(18,42,36,.72)', maxWidth: '620px' }}>Our services are engineered around one goal: Confident Growth. From tailored strategy to financial integrity, we guide business owners with clarity to achieve growth. Our programs are designed according to business maturity stage. Our execution services are a testament of our commitment to achieving results.</p>
      <div style={{ position: 'relative', width: '210px', height: '190px', justifySelf: 'end' }}>
        <div style={{ position: 'absolute', inset: '0', background: '#2FA98C', clipPath: 'polygon(50% 3%, 2% 97%, 50% 66%)', animation: 'acv-tri-l 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: '0', background: '#17705C', clipPath: 'polygon(50% 3%, 98% 97%, 50% 66%)', animation: 'acv-tri-r 6s ease-in-out infinite' }}></div>
        <div style={{ position: 'absolute', inset: '0', background: '#7FCBB4', clipPath: 'polygon(2% 97%, 98% 97%, 50% 66%)', animation: 'acv-tri-c 6s ease-in-out infinite' }}></div>
      </div>
    </div>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '48px' }}>Strategy programs <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>guiding the journey</span></div>

    <a href="/services/change-the-game" className="acv-section" style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr 1fr 30px', gap: '40px', padding: '40px 0', borderTop: '1px solid var(--acv-hairline)', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Change the Game</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>Vision Clarity for multi-generational businesses.</p>
      </div>
      <div style={{ color: '#0E6B5A', fontSize: '18px' }}>→</div>
    </a>

    <a href="/services/business-engineering" className="acv-section" style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr 1fr 30px', gap: '40px', padding: '40px 0', borderTop: '1px solid var(--acv-hairline)', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Business Engineering</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>Growth Targeting for early-stage ventures.</p>
      </div>
      <div style={{ color: '#0E6B5A', fontSize: '18px' }}>→</div>
    </a>

    <a href="/services/launch-with-confidence" className="acv-section" style={{ textDecoration: 'none', color: 'inherit', display: 'grid', gridTemplateColumns: '1fr 1fr 30px', gap: '40px', padding: '40px 0', borderTop: '1px solid var(--acv-hairline)', borderBottom: '1px solid var(--acv-hairline)', alignItems: 'center' }}>
      <div>
        <div style={{ fontSize: '26px', fontWeight: '400' }}>Launch with Confidence</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>GTM Success for new markets &amp; products.</p>
      </div>
      <div style={{ color: '#0E6B5A', fontSize: '18px' }}>→</div>
    </a>
  </div>
</SectionRail>


<SectionRail num="II" label="FINANCE" screenLabel="Finance">
  <div>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '16px' }}>Corporate finance <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>services</span></div>
    <p style={{ margin: '0 0 48px', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)', maxWidth: '560px' }}>Our execution services are a testament of our commitment to achieving results.</p>
    <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(260px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
      <Card href="/services/financial-engineering" marker={1} title="Financial Engineering" body="Visibility for decision-making." />
      <Card href="/services/mergers-acquisition" marker={2} title={<>Mergers &amp; Acquisitions</>} body="Credibility in every deal." />
      <Card href="/services/investment-capital-funding" marker={3} dark title={<>Investment &amp; Capital Funding</>} body="Clarity for growth." />
    </div>
  </div>
</SectionRail>


<SectionRail num="III" label="MODEL" screenLabel="Engagement teaser" last>
  <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '56px', alignItems: 'center' }}>
    <div>
      <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em' }}>How we engage: <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>insight to impact</span>, with ownership at every step.</div>
      <p style={{ margin: '16px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)', maxWidth: '560px' }}>Every program follows the same disciplined arc — see the model that carried 87 engagements across 18 countries.</p>
    </div>
    <a className="acv-pill" href="/engagement-model" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '15px 28px', borderRadius: '16px' }}>ENGAGEMENT MODEL →</a>
  </div>
</SectionRail>


<CtaBand
  headline={<>Not sure which<br />program <Accent>fits</Accent>?</>}
  blurb="A 30-minute conversation will tell us both."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
