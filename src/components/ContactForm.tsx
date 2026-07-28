'use client'

import React, { useEffect, useRef, useState } from 'react'

const fieldStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '16px',
  color: '#122A24',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(18,42,36,.25)',
  padding: '10px 0',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '11px',
  letterSpacing: '.18em',
  color: 'rgba(18,42,36,.55)',
}

const TOPICS = ['Strategic Programs', 'Corporate Financial Services']

// Brand-styled replacement for the native <select>: same bottom-rule trigger
// as the other fields, custom popup list so the open state matches the brand
// too. Keyboard: Enter/Space/arrows open, arrows move, Enter selects, Esc closes.
function TopicSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])

  const openList = () => {
    setHighlight(Math.max(0, TOPICS.indexOf(value)))
    setOpen(true)
  }
  const select = (v: string) => {
    onChange(v)
    setOpen(false)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        openList()
      }
      return
    }
    if (e.key === 'Escape' || e.key === 'Tab') setOpen(false)
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight((h) => Math.min(TOPICS.length - 1, h + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((h) => Math.max(0, h - 1))
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      select(TOPICS[highlight])
    }
  }

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      <button
        type="button"
        className="acv-field"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={onKeyDown}
        style={{
          ...fieldStyle,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          cursor: 'pointer',
          textAlign: 'left',
          color: value ? '#122A24' : 'rgba(18,42,36,.35)',
        }}
      >
        <span>{value || '— Choose One —'}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .18s ease' }}>
          <path d="M1 1.5 6 6.5 11 1.5" stroke="#0A4A3F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label="Topic"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            zIndex: 30,
            margin: 0,
            padding: '8px 0',
            listStyle: 'none',
            background: '#FFFFFF',
            border: '1px solid rgba(18,42,36,.15)',
            boxShadow: '0 16px 32px rgba(7,51,44,.12)',
          }}
        >
          {TOPICS.map((t, i) => (
            <li
              key={t}
              role="option"
              aria-selected={value === t}
              onMouseEnter={() => setHighlight(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => select(t)}
              style={{
                padding: '12px 20px',
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                cursor: 'pointer',
                color: highlight === i || value === t ? '#0A4A3F' : '#122A24',
                background: highlight === i ? '#F6F5F1' : 'transparent',
              }}
            >
              {t}
              {value === t ? <span style={{ marginLeft: '10px', color: '#0A4A3F' }}>✓</span> : null}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('') // honeypot — humans never see or fill this
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !topic || !message.trim()) {
      setStatus('error')
      setError('Please fill in all fields.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, topic, message, company }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }
      setStatus('success')
      setName('')
      setEmail('')
      setTopic('')
      setMessage('')
    } catch (err: any) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '32px' }}>START THE CONVERSATION</div>
      <div className="acv-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>NAME</label>
          <input className="acv-field" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={fieldStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>EMAIL</label>
          <input className="acv-field" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} style={fieldStyle} />
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>TOPIC</label>
          <TopicSelect value={topic} onChange={setTopic} />
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>MESSAGE</label>
          <textarea className="acv-field" rows={5} placeholder="Where is the ambiguity today?" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...fieldStyle, resize: 'vertical' }}></textarea>
        </div>
      </div>

      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label>
          Company
          <input type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} />
        </label>
      </div>

      {status === 'success' ? (
        <div style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '16px', color: '#0A4A3F' }}>
          Thank you — your message has been sent. We&rsquo;ll be in touch shortly.
        </div>
      ) : null}
      {status === 'error' && error ? (
        <div style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '16px', color: '#B23A2E' }}>{error}</div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="acv-btn"
        style={{
          marginTop: '40px',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          letterSpacing: '.14em',
          color: '#F6F5F1',
          background: '#0A4A3F',
          padding: '15px 28px',
          borderRadius: '16px',
          display: 'inline-block',
          border: 'none',
          cursor: status === 'sending' ? 'default' : 'pointer',
          opacity: status === 'sending' ? 0.6 : 1,
        }}
      >
        {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE →'}
      </button>
    </form>
  )
}
