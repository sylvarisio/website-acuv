import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import ThoughtsSection from '@/components/ThoughtsSection'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, CtaBand, NumCircle, SectionRail } from '@/components/ui'

export const metadata = { title: 'Thoughts — Acuv Strategy' }

export const dynamic = 'force-dynamic'

export default async function Page() {
  let thoughts: any[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'thoughts', sort: '-tlNumber', limit: 100, depth: 2 })
    thoughts = res.docs
  } catch (e) {}
  return (
    <>
<div data-screen-label="Thoughts Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <SiteNav active="thoughts" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>THOUGHTS</div>
    <div className="acv-h-lg" style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '820px', textWrap: 'pretty' }}>Insights for the <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>next stage</span></div>
  </div>
</div>


<ThoughtsSection thoughts={thoughts} />


<CtaBand
  headline={<>Thinking about<br />your <Accent>next stage</Accent>?</>}
  blurb="Let's turn clarity into momentum — together."
  buttons={[
    { href: '/engagement-model', label: 'ENGAGEMENT MODEL', variant: 'outline' },
    { href: '/contact', label: 'CONTACT US →' },
  ]}
/>
    </>
  )
}
