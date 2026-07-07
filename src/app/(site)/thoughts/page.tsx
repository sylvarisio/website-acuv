import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import ThoughtsSection from '@/components/ThoughtsSection'

export const metadata = { title: 'Thoughts — Acuv Strategy' }

export const dynamic = 'force-dynamic'

export default async function Page() {
  let thoughts: any[] = []
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'thoughts', sort: 'tlNumber', limit: 100, depth: 2 })
    thoughts = res.docs
  } catch (e) {}
  return (
    <>
<div data-screen-label="Thoughts Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.75', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.8} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '210px', height: 'auto' }} /></a>
    <div style={{ display: 'flex', gap: '22px', fontFamily: 'var(--font-sans)', fontSize: '10.5px', letterSpacing: '.08em' }}>
      <a href="/" style={{ color: 'rgba(234,244,240,.6)' }}>01 HOME</a>
      <a href="/services" style={{ color: 'rgba(234,244,240,.6)' }}>02 SERVICES</a>
      <a href="/about" style={{ color: 'rgba(234,244,240,.6)' }}>03 ABOUT</a>
      <a href="/engagement-model" style={{ color: 'rgba(234,244,240,.6)' }}>04 ENGAGEMENT</a>
      <a href="/success-stories" style={{ color: 'rgba(234,244,240,.6)' }}>05 STORIES</a>
      <a href="/thoughts" style={{ color: '#EAF4F0' }}>06 THOUGHTS</a>
    </div>
    <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.1em', color: '#9FD9C6', border: '1px solid rgba(159,217,198,.5)', padding: '9px 20px', borderRadius: '999px' }}>CONTACT ↗</a>
  </div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '88px 56px 180px' }}>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', marginBottom: '24px' }}>06 — THOUGHTS</div>
    <div style={{ fontWeight: '300', fontSize: '68px', lineHeight: '1.05', letterSpacing: '-.025em', maxWidth: '820px', textWrap: 'pretty' }}>Insights for the <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>next stage</span></div>
  </div>
</div>


<ThoughtsSection thoughts={thoughts} />


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
  <div style={{ position: 'absolute', right: '-140px', bottom: '-200px', width: '470px', height: '470px', border: '1px solid rgba(159,217,198,.14)', borderRadius: '50%' }}></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '96px 56px 96px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '64px', borderTop: '1px solid rgba(159,217,198,.25)', paddingTop: '48px' }}>
      <div style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em' }}>Thinking about<br />your <span style={{ fontFamily: 'var(--font-sans)', fontStyle: 'italic', fontWeight: '400', color: '#9FD9C6' }}>next stage</span>?</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '24px' }}>
        <p style={{ margin: '0', fontSize: '14px', color: 'rgba(234,244,240,.6)', maxWidth: '280px', textAlign: 'right' }}>Let's turn clarity into momentum — together.</p>
        <a href="/contact" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#07332C', background: '#9FD9C6', padding: '16px 32px', borderRadius: '999px' }}>CONTACT US ↗</a>
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
