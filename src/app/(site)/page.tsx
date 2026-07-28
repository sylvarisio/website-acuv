import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import AnnouncementBand from '@/components/AnnouncementBand'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, ArrowLink, ArrowText, Card, CtaBand, NumCircle, Stats } from '@/components/ui'


export const dynamic = 'force-dynamic'

export default async function Page() {
  let announcement: any = null
  let companyProfileUrl: string | undefined
  let latestThoughts: any[] = []
  let stories: any[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'announcements', where: { featured: { equals: true } }, limit: 1, sort: '-updatedAt' })
    announcement = res.docs[0] || null
    const profileRes = await payload.find({ collection: 'documents', where: { category: { equals: 'company-profile' } }, limit: 1, sort: '-updatedAt' })
    const profileDoc = profileRes.docs[0] as any
    if (profileDoc && profileDoc.file && typeof profileDoc.file === 'object') {
      companyProfileUrl = profileDoc.file.url
    }
    const thoughtsRes = await payload.find({ collection: 'thoughts', sort: '-tlNumber', limit: 2, depth: 1 })
    latestThoughts = thoughtsRes.docs
    const storiesRes = await payload.find({ collection: 'stories', sort: 'order', limit: 3 })
    stories = storiesRes.docs
  } catch (e) {}

  const monthYear = (d?: string) =>
    d ? new Date(d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : ''

  return (
    <>
<div data-screen-label="Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-220px', top: '-220px', width: '640px', height: '640px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', top: '-140px', width: '480px', height: '480px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <SiteNav active="home" />
  <div className="acv-pad acv-duo" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 0', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '64px', alignItems: 'end' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '28px' }}>FROM INSIGHT TO IMPACT</div>
      <div className="acv-h-xl" style={{ fontWeight: '300', fontSize: '82px', lineHeight: '1.04', letterSpacing: '-.025em', textWrap: 'pretty' }}>The destination for <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>confident growth</span></div>
    </div>
    <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)' }}>From ambiguity to clarity. From hesitation to momentum. Strategy, execution, finance — one credible whole.</p>
  </div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '56px 56px 0' }}>
    <div style={{ position: 'relative', height: 'min(400px, 56vw)', background: '#06302A', overflow: 'hidden' }}>
      <video
        src="/videos/acuv-reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  </div>
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '0 var(--acv-pad-x) 36px' }}>
    <Stats
      dark
      items={[
        { value: '18', label: 'COUNTRIES' },
        { value: '87', label: 'ENGAGEMENTS' },
        { value: '59', label: 'SECTORS' },
        { value: '$599M', label: 'STRUCTURED CAPITAL' },
      ]}
    />
  </div>
</div>


<div data-screen-label="Welcome" style={{ position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '40%', backgroundImage: 'radial-gradient(rgba(10,74,63,.14) 1px,transparent 1px)', backgroundSize: '14px 14px', WebkitMask: 'linear-gradient(to left,#000 30%,transparent)', mask: 'linear-gradient(to left,#000 30%,transparent)', animation: 'acv-drift 24s linear infinite' }}></div>
  <div className="acv-pad acv-duo" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 0', display: 'grid', gridTemplateColumns: '1fr 420px', gap: '72px' }}>
    <div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '20px' }}>WELCOME TO ACUV</div>
      <div className="acv-h-sm" style={{ fontSize: '42px', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-.015em', maxWidth: '640px' }}>We believe in <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>confident growth</span></div>
      <p style={{ margin: '24px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)', maxWidth: '620px' }}>Whether you're a multi-generational family business navigating change or an emerging company chasing scale — strategy rooted in realism, execution backed by ownership, finance driven by credibility.</p>
      <a href={companyProfileUrl || '/about'} target={companyProfileUrl ? '_blank' : undefined} rel={companyProfileUrl ? 'noopener noreferrer' : undefined} className="acv-pill" style={{ marginTop: '32px', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.1em', padding: '9px 20px', borderRadius: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, whiteSpace: 'nowrap', border: '1px solid transparent', color: '#F6F5F1', background: '#0A4A3F' }}>DOWNLOAD COMPANY PROFILE</a>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {[
        { n: 'I', title: 'MASTERY', desc: 'Excellence refined.' },
        { n: 'II', title: 'NOVELTY', desc: 'Innovation with relevance.' },
        { n: 'III', title: 'VIGILANCE', desc: 'Eyes on the details, ears to the market.' },
      ].map((v, vi) => (
        <div key={v.n} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: '20px', padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', borderBottom: vi === 2 ? '1px solid var(--acv-hairline)' : 'none' }}>
          <NumCircle n={vi + 1} />
          <div>
            <div style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '.06em' }}>{v.title}</div>
            <div style={{ marginTop: '6px', fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>{v.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


<AnnouncementBand announcement={announcement} />

<div className="acv-pad" data-screen-label="Programs" style={{ maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 0' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '48px', gap: '20px', flexWrap: 'wrap' }}>
    <div style={{ fontSize: '36px', fontWeight: '300', letterSpacing: '-.015em' }}>Strategy programs <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>guiding the journey</span></div>
    <ArrowLink href="/services" label="ALL SERVICES" />
  </div>
  <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(260px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
    <Card href="/services/change-the-game" title="Change the Game" body="Vision clarity for multi-generational family businesses." />
    <Card href="/services/business-engineering" title="Business Engineering" body="Growth targeting with structure, positioning, and systems." />
    <Card href="/services/launch-with-confidence" dark title="Launch with Confidence" body="Go-to-market plans that turn opportunity into impact." />
  </div>
</div>


<div data-screen-label="Why acuv" style={{ position: 'relative', overflow: 'hidden' }}>
  <div className="acv-pad acv-duo" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 0', display: 'grid', gridTemplateColumns: '340px 1fr', gap: '72px' }}>
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '320px', height: '320px', opacity: '.45' }}><div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'repeating-conic-gradient(rgba(14,107,90,.4) 0deg 0.6deg,transparent 0.6deg 4.5deg)', WebkitMask: 'radial-gradient(circle,transparent 29%,#000 30%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 29%,#000 30%,#000 60%,transparent 61%)', animation: 'acv-spin 110s linear infinite' }}></div></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '20px', textAlign: 'center' }}>WHY ACUV</div>
      <div style={{ position: 'relative', fontSize: '36px', fontWeight: '300', lineHeight: '1.2', letterSpacing: '-.015em', textAlign: 'center' }}>Five reasons clients <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F' }}>stay</span></div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="acv-section" style={{ padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Clarity-led transformation</div><div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>We don't just advise — we architect change across strategy, finance, and execution.</div></div>
      <div className="acv-section" style={{ padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Built for business maturity</div><div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>Programs that adapt to each growth phase, from ventures to multi-generational enterprises.</div></div>
      <div className="acv-section" style={{ padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Strategy meets finance</div><div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>A dual-core offering bridging strategic vision with financial precision.</div></div>
      <div className="acv-section" style={{ padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Human-centered, impact-driven</div><div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>The emotional architecture of leadership — empathy balanced with execution.</div></div>
      <div className="acv-section" style={{ padding: '24px 0', borderTop: '1px solid var(--acv-hairline)', borderBottom: '1px solid rgba(18,42,36,.15)', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}><div style={{ fontSize: '16px', fontWeight: '500' }}>Proven outcomes</div><div style={{ fontSize: '15px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>32% YoY revenue growth; capital raised 18% above benchmark.</div></div>
    </div>
  </div>
</div>


<div className="acv-pad" data-screen-label="Proof" style={{ maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 96px' }}>
  <div className="acv-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(300px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
    {(stories.length
      ? stories.map((s: any) => ({ href: `/success-stories#${s.slug}`, title: s.title, blurb: s.excerpt }))
      : [
          { href: '/success-stories', title: 'Turning Friction into Clarity', blurb: 'Family manufacturer — alignment and legacy transformation.' },
          { href: '/success-stories', title: 'Raising Capital with Confidence', blurb: 'FMCG Distributor — investor readiness, valuation integrity.' },
          { href: '/success-stories', title: 'Unlocking Structure for Growth', blurb: 'Emerging Tech Services — org design, cadence, KPIs.' },
        ]
    ).map((card) => (
      <Card key={card.title} href={card.href} kicker="SUCCESS STORY" title={card.title} body={card.blurb} />
    ))}
  </div>
  <div className="acv-cols-3" style={{ marginTop: 'var(--acv-gap)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: 'minmax(300px, auto)', gap: 'var(--acv-gap)', alignItems: 'stretch' }}>
    <div style={{ background: '#0A4A3F', color: '#EAF4F0', padding: '36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-90px', bottom: '-90px', width: '260px', height: '260px', background: 'repeating-conic-gradient(rgba(159,217,198,.35) 0deg 0.6deg,transparent 0.6deg 5deg)', borderRadius: '50%', WebkitMask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', animation: 'acv-spin 90s linear infinite' }}></div>
      <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '28px', lineHeight: '1.45' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
      <div style={{ position: 'relative', marginTop: '16px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6' }}>WORDS WE ARE PROUD OF</div>
    </div>
    {(latestThoughts.length
      ? latestThoughts.map((t: any) => ({
          href: `/thoughts/${t.slug ?? t.id}`,
          title: t.title,
          date: monthYear(t.publishedDate),
          cover: t.cover && typeof t.cover === 'object' ? t.cover.url : null,
          tl: String(t.tlNumber ?? 0).padStart(2, '0'),
        }))
      : [
          { href: '/thoughts', title: 'Getting Ahead of the Next Stage', date: 'November 2025', cover: null, tl: '04' },
          { href: '/thoughts', title: 'Global Trade in Turbulence', date: 'March 2024', cover: null, tl: '01' },
        ]
    ).map((card) => (
      <a key={card.title} href={card.href} style={{ border: '1px solid var(--acv-hairline)', background: '#fff', display: 'flex', flexDirection: 'column', color: '#122A24', overflow: 'hidden' }}>
        {card.cover ? (
          <img src={card.cover} alt="" style={{ width: '100%', height: '120px', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', height: '120px', background: '#07332C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#9FD9C6' }}>TL — {card.tl}</div>
        )}
        <div style={{ padding: '28px 32px 36px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A' }}>THOUGHTS</div>
          <div style={{ fontSize: '20px', lineHeight: '1.3' }}>{card.title}</div>
          {card.date ? <div style={{ fontSize: '13px', color: 'rgba(18,42,36,.55)' }}>{card.date}</div> : null}
          <ArrowText label="EXPLORE" style={{ marginTop: 'auto' }} />
        </div>
      </a>
    ))}
  </div>
</div>


<CtaBand
  headline={<>Ready to build<br />something <Accent>big</Accent>?</>}
  blurb="Let's turn clarity into momentum — together."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
