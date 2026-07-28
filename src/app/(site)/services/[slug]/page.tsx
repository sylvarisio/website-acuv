import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, CtaBand, NumCircle, SectionRail } from '@/components/ui'
import { getService, services } from '@/content/services'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.title} — Acuv Strategy`,
    description: `${service.tagline}. ${service.audience}`,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return notFound()

  const groupLabel = service.group === 'strategy' ? 'STRATEGY PROGRAM' : 'CORPORATE FINANCE'

  return (
    <>
<div data-screen-label="Service Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="services" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '64px 56px 140px' }}>
    <a href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#9FD9C6' }}>← ALL SERVICES</a>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', margin: '32px 0 20px' }}>{groupLabel}</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>{service.title}</div>
    <div style={{ margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', fontSize: '24px', color: '#9FD9C6' }}>{service.tagline}</div>
    <p style={{ margin: '28px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)', maxWidth: '560px' }}>{service.audience}</p>
  </div>
</div>


<SectionRail num="I" label="OVERVIEW" screenLabel="Overview">
  <div>
    {service.intro.map((paragraph, i) => (
      <p key={i} style={{ margin: i === 0 ? '0 0 20px' : '0', fontSize: '17.5px', lineHeight: '1.85', color: 'rgba(18,42,36,.75)', maxWidth: '720px' }}>{paragraph}</p>
    ))}
  </div>
</SectionRail>


<SectionRail num="II" label="APPROACH" screenLabel="Approach">
  <div>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '48px' }}>Our <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>approach</span></div>
    {service.approach.map((step, i) => (
      <div key={i} className="acv-section" style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '40px', padding: '28px 0', borderTop: '1px solid var(--acv-hairline)', borderBottom: i === service.approach.length - 1 ? '1px solid var(--acv-hairline)' : 'none', alignItems: 'center' }}>
        <NumCircle n={i + 1} />
        <p style={{ margin: '0', fontSize: '17.5px', lineHeight: '1.8', color: 'rgba(18,42,36,.75)' }}>{step}</p>
      </div>
    ))}
  </div>
</SectionRail>


<SectionRail num="III" label="IMPACT" screenLabel="Impact">
  <div>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '48px' }}>Impact &amp; <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>benefits</span></div>
    <div className="acv-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: 'minmax(180px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
      {service.impact.map((item, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid var(--acv-hairline)', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <NumCircle n={i + 1} />
          <div style={{ fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.8)' }}>{item}</div>
        </div>
      ))}
    </div>
  </div>
</SectionRail>


<SectionRail num="IV" label="WHY ACUV" screenLabel="Why acuv" last>
  <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '56px', alignItems: 'center' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '26px', lineHeight: '1.5', color: '#0A4A3F' }}>{service.why}</div>
    <a className="acv-pill" href="/engagement-model" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.1em', padding: '9px 20px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, whiteSpace: 'nowrap', border: '1px solid transparent', color: '#F6F5F1', background: '#0A4A3F' }}>HOW WE ENGAGE →</a>
  </div>
</SectionRail>


<CtaBand
  headline={<>Ready to shape<br />what's <Accent>next</Accent>?</>}
  blurb="A 30-minute conversation will tell us both."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
