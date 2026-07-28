import React from 'react'

// Minimal Lexical (Payload richText) -> React renderer.
// Handles headings, paragraphs, lists, quotes, links and inline formatting.
// Shared by the thoughts detail page and the success-stories page.
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
        <Tag key={key} style={{ margin: '16px 0', paddingLeft: 22, fontSize: 17.5, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }}>
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
        <p key={key} style={{ margin: '0 0 18px', fontSize: 17.5, lineHeight: 1.85, color: 'rgba(18,42,36,.8)' }}>
          {children}
        </p>
      )
    default:
      // Unknown block: render its children if any.
      return children ? <div key={key}>{children}</div> : null
  }
}

export default function RichText({ data }: { data: any }) {
  const root = data?.root
  if (!root?.children) return null
  return <>{renderChildren(root.children, 'rt')}</>
}
