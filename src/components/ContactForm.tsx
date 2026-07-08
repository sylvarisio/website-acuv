'use client'

import React, { useState } from 'react'

const fieldStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '15px',
  color: '#122A24',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(18,42,36,.25)',
  padding: '10px 0',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '10px',
  letterSpacing: '.18em',
  color: 'rgba(18,42,36,.5)',
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')
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
        body: JSON.stringify({ name, email, topic, message }),
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
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '.2em', color: '#0E6B5A', marginBottom: '32px' }}>START THE CONVERSATION</div>
      <div className="acv-cols-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>NAME</label>
          <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} style={fieldStyle} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>EMAIL</label>
          <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} style={fieldStyle} />
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>TOPIC</label>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ ...fieldStyle, appearance: 'auto', color: topic ? '#122A24' : 'rgba(18,42,36,.35)' }}>
            <option value="">— Choose One —</option>
            <option value="Strategic Programs">Strategic Programs</option>
            <option value="Corporate Financial Services">Corporate Financial Services</option>
          </select>
        </div>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <label style={labelStyle}>MESSAGE</label>
          <textarea rows={5} placeholder="Where is the ambiguity today?" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...fieldStyle, resize: 'vertical' }}></textarea>
        </div>
      </div>

      {status === 'success' ? (
        <div style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#0A4A3F' }}>
          Thank you — your message has been sent. We&rsquo;ll be in touch shortly.
        </div>
      ) : null}
      {status === 'error' && error ? (
        <div style={{ marginTop: '28px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#B23A2E' }}>{error}</div>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          marginTop: '40px',
          fontFamily: 'var(--font-sans)',
          fontSize: '12px',
          letterSpacing: '.14em',
          color: '#F6F5F1',
          background: '#0A4A3F',
          padding: '16px 36px',
          borderRadius: '999px',
          display: 'inline-block',
          border: 'none',
          cursor: status === 'sending' ? 'default' : 'pointer',
          opacity: status === 'sending' ? 0.6 : 1,
        }}
      >
        {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE ↗'}
      </button>
    </form>
  )
}
