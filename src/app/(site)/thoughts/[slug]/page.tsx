import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { Accent, CtaBand, NumCircle, SectionRail } from '@/components/ui'
import { notFound } from 'next/navigation'
import React from 'react'
import RichText from '@/components/RichText'


export const dynamic = 'force-dynamic'

// Fallback formatter for plain-text excerpts (when there's no rich-text body).
// Turns a wall of text into readable paragraphs and bullet lists:
//  - splits paragraphs on blank lines / single newlines
//  - lines/segments starting with "•" or "-" become <li> items
function FormattedText({ text }: { text: string }) {
  if (!text) return null
  const pStyle: React.CSSProperties = { margin: '0 0 18px', fontSize: 17.5, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }
  // Split bullet segments that were written inline with "• "
  const normalized = text.replace(/\s*•\s*/g, '\n• ').replace(/\r/g, '')
  const lines = normalized.split(/\n+/).map((l) => l.trim()).filter(Boolean)

  const blocks: React.ReactNode[] = []
  let bullets: string[] = []
  const flush = (key: string) => {
    if (bullets.length) {
      blocks.push(
        <ul key={'ul-' + key} style={{ margin: '4px 0 22px', paddingLeft: 22, fontSize: 17.5, lineHeight: 1.8, color: 'rgba(18,42,36,.8)' }}>
          {bullets.map((b, i) => <li key={i} style={{ marginBottom: 8 }}>{b}</li>)}
        </ul>
      )
      bullets = []
    }
  }
  lines.forEach((line, i) => {
    const m = line.match(/^[•\-]\s*(.*)$/)
    if (m) {
      bullets.push(m[1])
    } else {
      flush('b' + i)
      blocks.push(<p key={'p' + i} style={pStyle}>{line}</p>)
    }
  })
  flush('end')
  return <>{blocks}</>
}

const pad = (n: any) => String(n ?? 0).padStart(2, '0')

async function getThought(slug: string) {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({ collection: 'thoughts', where: { slug: { equals: slug } }, limit: 1, depth: 2 })
    return res.docs[0] ?? null
  } catch (e) {
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const thought: any = await getThought(slug)
  if (!thought) return {}
  const description = thought.excerpt || thought.subtitle || undefined
  return {
    title: `${thought.title} — Acuv Strategy`,
    description,
    openGraph: { title: thought.title, description, type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const thought: any = await getThought(slug)
  if (!thought) return notFound()

  const pdfUrl = thought.pdf && typeof thought.pdf === 'object' ? thought.pdf.url : null
  const coverUrl = thought.cover && typeof thought.cover === 'object' ? thought.cover.url : null

  return (
    <>
<div data-screen-label="Article Hero" className="acv-hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.6', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.7} /></div>
  <SiteNav active="thoughts" />
  <div className="acv-pad" style={{ position: 'relative', maxWidth: 'var(--acv-container)', margin: '0 auto', padding: '64px 56px 140px' }}>
    <a href="/thoughts" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#9FD9C6' }}>← ALL THOUGHTS</a>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.22em', color: '#9FD9C6', margin: '32px 0 20px' }}>THOUGHT LEADERSHIP — {pad(thought.tlNumber)}</div>
    <div className="acv-h-md" style={{ fontWeight: '300', fontSize: '60px', lineHeight: '1.08', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>{thought.title}</div>

    {thought.subtitle ? (
      <p style={{ margin: '24px 0 0', fontSize: '17.5px', lineHeight: '1.8', color: 'rgba(234,244,240,.7)', maxWidth: '640px' }}>{thought.subtitle}</p>
    ) : null}
  </div>
</div>


<div className="acv-pad" data-screen-label="Article Body" style={{ maxWidth: '860px', margin: '0 auto', padding: 'var(--acv-section-pad) var(--acv-pad-x) 96px' }}>

  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: 'rgba(18,42,36,.55)', marginBottom: '20px' }}>
    ARTICLE{thought.publishedDate ? ' · ' + new Date(thought.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ''}
  </div>
  <div style={{ borderTop: '1px solid var(--acv-rule)', paddingTop: '40px' }}>
    {coverUrl ? (
      <img src={coverUrl} alt={thought.title} style={{ width: '100%', height: 'auto', marginBottom: '40px', display: 'block' }} />
    ) : null}

    {pdfUrl ? (
      <a className="acv-pill" href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '44px', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.12em', color: '#F6F5F1', background: '#0A4A3F', padding: '13px 24px', borderRadius: '16px' }}>DOWNLOAD PDF ↓</a>
    ) : null}

    {thought.body ? (
      // Rich-text body present: render it (excerpt acts as a lead paragraph above).
      <>
        {thought.excerpt ? (
          <p style={{ margin: '0 0 28px', fontSize: '20px', lineHeight: '1.8', color: 'rgba(18,42,36,.85)', fontWeight: 400 }}>{thought.excerpt}</p>
        ) : null}
        <RichText data={thought.body} />
      </>
    ) : thought.excerpt ? (
      // No rich-text body: format the plain-text excerpt into paragraphs + bullets.
      <FormattedText text={thought.excerpt} />
    ) : !pdfUrl ? (
      <p style={{ fontSize: '16px', color: 'rgba(18,42,36,.55)' }}>Full article coming soon.</p>
    ) : null}

    <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--acv-hairline)' }}>
      <a href="/thoughts" style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#0E6B5A' }}>← BACK TO ALL THOUGHTS</a>
    </div>
  </div>
</div>


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
