import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, CtaBand, NumCircle, SectionRail } from '@/components/ui'
import RichText from '@/components/RichText'

export const metadata = { title: 'Success Stories — Acuv Strategy' }

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

export const dynamic = 'force-dynamic'

export default async function Page() {
  let stories: any[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'stories', sort: 'order', limit: 10 })
    stories = res.docs
  } catch (e) {}

  return (
    <>
<div data-screen-label="Stories Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="stories" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>SUCCESS STORIES</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '820px', textWrap: 'pretty' }}>Impact that is measurable, repeatable, <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>transformative</span></div>
  </div>
</div>


{stories.map((story: any, i: number) => {
  const kicker = String(story.industry || story.client || '').toUpperCase()
  const milestones = (story.milestones || []).map((m: any) => m.label)
  return (
    <div key={story.slug} id={story.slug} style={{ scrollMarginTop: '24px' }}>
      <SectionRail num={ROMAN[i]} label="STORY" screenLabel={`Story ${i + 1}`}>
        <div className="acv-duo" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '56px', alignItems: 'start' }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '12px' }}>{kicker}</div>
            <div style={{ fontSize: '26px', fontWeight: '500', lineHeight: '1.2', letterSpacing: '-.01em' }}>{story.title}</div>
            {story.theme ? (
              <p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.8', color: 'rgba(18,42,36,.72)' }}>{story.theme}</p>
            ) : null}
            <div style={{ marginTop: '40px' }}>
              <RichText data={story.body} />
              {story.closing ? (
                <p style={{ margin: '24px 0 0', fontStyle: 'italic', fontSize: '17.5px', lineHeight: '1.8', color: '#0A4A3F' }}>{story.closing}</p>
              ) : null}
            </div>
          </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--acv-hairline)', padding: '36px 32px' }}>
              {story.quote ? (
                <blockquote style={{ margin: 0 }}>
                  <div aria-hidden="true" style={{ fontSize: '54px', lineHeight: 1, fontWeight: 300, color: 'rgba(159,217,198,.9)', marginBottom: '4px' }}>“</div>
                  <div style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '23px', lineHeight: '1.5', color: '#0A4A3F' }}>{story.quote}</div>
                  <div style={{ marginTop: '14px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: 'rgba(18,42,36,.55)' }}>— {String(story.client || '').toUpperCase()}</div>
                </blockquote>
              ) : null}
              {milestones.length ? (
                <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--acv-hairline)' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '18px' }}>THE JOURNEY</div>
                  <div className="acv-journey-v">
                    {milestones.map((label: string, mi: number) => (
                      <div key={label} className="acv-journey-v__step">
                        <NumCircle n={mi + 1} />
                        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', lineHeight: '1.7', color: '#0A4A3F', textTransform: 'uppercase', paddingTop: '7px' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
        </div>
      </SectionRail>
    </div>
  )
})}


<div className="acv-pad" data-screen-label="Quote" style={{ maxWidth: 'var(--acv-container)', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 96px' }}>
  <div className="acv-band" style={{ background: '#0A4A3F', color: '#EAF4F0', position: 'relative', overflow: 'hidden', padding: '80px 64px', textAlign: 'center' }}>
    <div style={{ position: 'absolute', left: '-80px', bottom: '-110px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle at 38% 35%,#17705C,#0A4A3F 72%)', boxShadow: '0 0 90px rgba(23,176,138,.4)' }}></div>
    <div style={{ position: 'absolute', left: '-104px', bottom: '-134px', width: '328px', height: '328px', border: '1px dotted rgba(159,217,198,.35)', borderRadius: '50%', animation: 'acv-ring 6s ease-in-out infinite' }}></div>
    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'repeating-conic-gradient(rgba(159,217,198,.35) 0deg 0.6deg,transparent 0.6deg 5deg)', borderRadius: '50%', WebkitMask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', mask: 'radial-gradient(circle,transparent 28%,#000 29%,#000 60%,transparent 61%)', animation: 'acv-spin 90s linear infinite' }}></div>
    <div style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontSize: '36px', lineHeight: '1.45', maxWidth: '720px', margin: '0 auto' }}>“Clear direction, measurable outcomes, and a partner that truly executes.”</div>
    <div style={{ position: 'relative', marginTop: '20px', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6' }}>WORDS WE ARE PROUD OF</div>
  </div>
</div>


<CtaBand
  headline={<>Your story<br /><Accent>next</Accent>?</>}
  blurb="Let's turn clarity into momentum — together."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
