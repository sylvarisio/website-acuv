import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
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
<div data-screen-label="Service Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="services" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '64px 56px 140px' }}>
    <a href="/services" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#9FD9C6' }}>← ALL SERVICES</a>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', margin: '32px 0 20px' }}>{groupLabel} — {service.marker}</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '64px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>{service.title}</div>
    <div style={{ margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', fontSize: '24px', color: '#9FD9C6' }}>{service.tagline}</div>
    <p style={{ margin: '28px 0 0', fontSize: '15px', lineHeight: '1.75', color: 'rgba(234,244,240,.6)', maxWidth: '560px' }}>{service.audience}</p>
  </div>
</div>


<div className="acv-pad acv-section" data-screen-label="Overview" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>01 /<br />OVERVIEW</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    {service.intro.map((paragraph, i) => (
      <p key={i} style={{ margin: i === 0 ? '0 0 20px' : '0', fontSize: '17px', lineHeight: '1.85', color: 'rgba(18,42,36,.75)', maxWidth: '720px' }}>{paragraph}</p>
    ))}
  </div>
</div>


<div className="acv-pad acv-section" data-screen-label="Approach" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>02 /<br />APPROACH</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ fontSize: '32px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '40px' }}>Our <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>approach</span></div>
    {service.approach.map((step, i) => (
      <div key={i} className="acv-section" style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '40px', padding: '28px 0', borderTop: '1px solid rgba(18,42,36,.12)', borderBottom: i === service.approach.length - 1 ? '1px solid rgba(18,42,36,.12)' : 'none', alignItems: 'center' }}>
        <div style={{ width: '44px', height: '44px', border: '1px solid #0E6B5A', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#0E6B5A' }}>{String(i + 1).padStart(2, '0')}</div>
        <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.7', color: 'rgba(18,42,36,.75)' }}>{step}</p>
      </div>
    ))}
  </div>
</div>


<div className="acv-pad acv-section" data-screen-label="Impact" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 0', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>03 /<br />IMPACT</div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '32px' }}>
    <div style={{ fontSize: '32px', fontWeight: '300', letterSpacing: '-.015em', marginBottom: '40px' }}>Impact &amp; <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>benefits</span></div>
    <div className="acv-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
      {service.impact.map((item, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid rgba(18,42,36,.1)', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '.2em', color: '#0E6B5A' }}>{String(i + 1).padStart(2, '0')}</div>
          <div style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(18,42,36,.8)' }}>{item}</div>
        </div>
      ))}
    </div>
  </div>
</div>


<div className="acv-pad acv-section" data-screen-label="Why acuv" style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '40px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)' }}>04 /<br />WHY ACUV</div>
  <div className="acv-duo" style={{ borderTop: '1px solid #122A24', paddingTop: '32px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: '56px', alignItems: 'center' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '26px', lineHeight: '1.5', color: '#0A4A3F' }}>{service.why}</div>
    <a href="/engagement-model" style={{ justifySelf: 'end', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '14px 26px', borderRadius: '999px' }}>HOW WE ENGAGE →</a>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div className="acv-cta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div className="acv-h-md" style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Ready to build<br />something <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>big</span>?</div>
      <div className="acv-cta-side" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>A 30-minute conversation will tell us both.</p>
        <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
      </div>
    </div>
    <SiteFooter />
  </div>
</div>
    </>
  )
}
