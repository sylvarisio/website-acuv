import config from '@payload-config'
import { getPayload } from 'payload'
import { DotWave } from '@/components/animations'
import { notFound } from 'next/navigation'
import React from 'react'

export const dynamic = 'force-dynamic'

// Minimal Lexical (Payload richText) -> React renderer.
// Handles headings, paragraphs, lists, quotes, links and inline formatting.
function renderChildren(children: any[], keyPrefix: string): React.ReactNode {
  if (!children) return null
  return children.map((node: any, i: number) => renderNode(node, `${keyPrefix}-${i}`))
}

function renderNode(node: any, key: string): React.ReactNode {
  if (!node) return null

  // Text node
  if (node.type === 'text' || typeof node.text === 'string') {
    let el: React.ReactNode = node.text
    const f = node.format || 0
    if (f & 1) el = <strong key={key + '-b'}>{el}</strong> // bold
    if (f & 2) el = <em key={key + '-i'}>{el}</em> // italic
    if (f & 8) el = <u key={key + '-u'}>{el}</u> // underline
    return <React.Fragment key={key}>{el}</React.Fragment>
  }

  const children = renderChildren(node.children, key)

  switch (node.type) {
    case 'heading': {
      const Tag: any = node.tag || 'h2'
      const sizes: Record<string, number> = { h1: 40, h2: 30, h3: 24, h4: 20, h5: 17, h6: 15 }
      return (
        <Tag key={key} style={{ fontWeight: 300, letterSpacing: '-.015em', lineHeight: 1.25, margin: '36px 0 12px', fontSize: sizes[node.tag as string] || 26 }}>
          {children}
        </Tag>
      )
    }
    case 'quote':
      return (
        <blockquote key={key} style={{ margin: '28px 0', padding: '4px 0 4px 24px', borderLeft: '3px solid #0A4A3F', fontFamily: 'var(--font-sans)', fontStyle: 'italic', color: '#0A4A3F', fontSize: 20, lineHeight: 1.5 }}>
          {children}
        </blockquote>
      )
    case 'list': {
      const Tag: any = node.tag === 'ol' ? 'ol' : 'ul'
      return (
        <Tag key={key} style={{ margin: '16px 0', paddingLeft: 22, fontSize: 16, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }}>
          {children}
        </Tag>
      )
    }
    case 'listitem':
      return <li key={key} style={{ marginBottom: 6 }}>{children}</li>
    case 'link': {
      const url = node.fields?.url || node.url || '#'
      const newTab = node.fields?.newTab
      return (
        <a key={key} href={url} target={newTab ? '_blank' : undefined} rel={newTab ? 'noopener noreferrer' : undefined} style={{ color: '#0A4A3F', textDecoration: 'underline' }}>
          {children}
        </a>
      )
    }
    case 'linebreak':
      return <br key={key} />
    case 'paragraph':
      return (
        <p key={key} style={{ margin: '0 0 18px', fontSize: 16, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }}>
          {children}
        </p>
      )
    default:
      // Unknown block: render its children if any.
      return children ? <div key={key}>{children}</div> : null
  }
}

function RichText({ data }: { data: any }) {
  const root = data?.root
  if (!root?.children) return null
  return <>{renderChildren(root.children, 'rt')}</>
}

// Fallback formatter for plain-text excerpts (when there's no rich-text body).
// Turns a wall of text into readable paragraphs and bullet lists:
//  - splits paragraphs on blank lines / single newlines
//  - lines/segments starting with "•" or "-" become <li> items
function FormattedText({ text }: { text: string }) {
  if (!text) return null
  const pStyle: React.CSSProperties = { margin: '0 0 18px', fontSize: 16.5, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }
  // Split bullet segments that were written inline with "• "
  const normalized = text.replace(/\s*•\s*/g, '\n• ').replace(/\r/g, '')
  const lines = normalized.split(/\n+/).map((l) => l.trim()).filter(Boolean)

  const blocks: React.ReactNode[] = []
  let bullets: string[] = []
  const flush = (key: string) => {
    if (bullets.length) {
      blocks.push(
        <ul key={'ul-' + key} style={{ margin: '4px 0 22px', paddingLeft: 22, fontSize: 16.5, lineHeight: 1.8, color: 'rgba(18,42,36,.8)' }}>
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

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let thought: any = null
  try {
    const payload = await getPayload({ config })
    thought = await payload.findByID({ collection: 'thoughts', id, depth: 2 })
  } catch (e) {
    thought = null
  }
  if (!thought) return notFound()

  const pdfUrl = thought.pdf && typeof thought.pdf === 'object' ? thought.pdf.url : null
  const coverUrl = thought.cover && typeof thought.cover === 'object' ? thought.cover.url : null

  return (
    <>
<div data-screen-label="Article Hero" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', left: '0', right: '0', bottom: '0', height: '260px', opacity: '.6', WebkitMask: 'linear-gradient(to top,#000 45%,transparent)', mask: 'linear-gradient(to top,#000 45%,transparent)' }}><DotWave gap={24} amp={12} alpha={0.7} /></div>
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 56px', borderBottom: '1px solid rgba(159,217,198,.18)' }}>
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '150px', height: 'auto' }} /></a>
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
  <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '64px 56px 120px' }}>
    <a href="/thoughts" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#9FD9C6' }}>← ALL THOUGHTS</a>
    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.22em', color: '#9FD9C6', margin: '32px 0 20px' }}>THOUGHT LEADERSHIP — {pad(thought.tlNumber)}</div>
    <div style={{ fontWeight: '300', fontSize: '56px', lineHeight: '1.08', letterSpacing: '-.025em', maxWidth: '860px', textWrap: 'pretty' }}>{thought.title}</div>
    {thought.subtitle ? (
      <p style={{ margin: '24px 0 0', fontSize: '17px', lineHeight: '1.7', color: 'rgba(234,244,240,.65)', maxWidth: '640px' }}>{thought.subtitle}</p>
    ) : null}
  </div>
</div>


<div data-screen-label="Article Body" style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 56px 96px' }}>
  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: 'rgba(18,42,36,.4)', marginBottom: '20px' }}>
    ARTICLE{thought.publishedDate ? ' · ' + new Date(thought.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : ''}
  </div>
  <div style={{ borderTop: '1px solid #122A24', paddingTop: '40px' }}>
    {coverUrl ? (
      <img src={coverUrl} alt={thought.title} style={{ width: '100%', height: 'auto', marginBottom: '40px', display: 'block' }} />
    ) : null}

    {pdfUrl ? (
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '44px', fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', color: '#F6F5F1', background: '#0A4A3F', padding: '15px 30px', borderRadius: '999px' }}>DOWNLOAD PDF ↓</a>
    ) : null}

    {thought.body ? (
      // Rich-text body present: render it (excerpt acts as a lead paragraph above).
      <>
        {thought.excerpt ? (
          <p style={{ margin: '0 0 28px', fontSize: '19px', lineHeight: '1.75', color: 'rgba(18,42,36,.85)', fontWeight: 400 }}>{thought.excerpt}</p>
        ) : null}
        <RichText data={thought.body} />
      </>
    ) : thought.excerpt ? (
      // No rich-text body: format the plain-text excerpt into paragraphs + bullets.
      <FormattedText text={thought.excerpt} />
    ) : !pdfUrl ? (
      <p style={{ fontSize: '15px', color: 'rgba(18,42,36,.5)' }}>Full article coming soon.</p>
    ) : null}

    <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid rgba(18,42,36,.12)' }}>
      <a href="/thoughts" style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.14em', color: '#0E6B5A' }}>← BACK TO ALL THOUGHTS</a>
    </div>
  </div>
</div>


<div data-screen-label="CTA" style={{ background: '#07332C', color: '#EAF4F0', position: 'relative', overflow: 'hidden' }}>
  <div style={{ position: 'absolute', right: '-200px', bottom: '-260px', width: '620px', height: '620px', border: '1px solid rgba(159,217,198,.18)', borderRadius: '50%' }}></div>
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
        <div style={{ marginBottom: '12px' }}><img src="/logo.png" alt="acuv Strategy" style={{ width: '132px', height: 'auto' }} /></div>
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
