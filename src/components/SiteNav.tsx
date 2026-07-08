'use client'

import React, { useState } from 'react'

const LINKS = [
  { href: '/', label: '01 HOME', key: 'home' },
  { href: '/services', label: '02 SERVICES', key: 'services' },
  { href: '/about', label: '03 ABOUT', key: 'about' },
  { href: '/engagement-model', label: '04 ENGAGEMENT', key: 'engagement' },
  { href: '/success-stories', label: '05 STORIES', key: 'stories' },
  { href: '/thoughts', label: '06 THOUGHTS', key: 'thoughts' },
]

// Shared responsive navigation bar. Collapses into a hamburger menu on
// screens <= 900px. `active` highlights the current page; `contactFilled`
// renders the Contact button in its solid variant (used on the contact page).
export default function SiteNav({
  active,
  contactFilled,
}: {
  active?: string
  contactFilled?: boolean
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="acv-nav">
      <a href="/" className="acv-nav__logo">
        <img src="/logo.png" alt="acuv Strategy" />
      </a>
      <div className={`acv-nav__links${open ? '' : ' acv-nav__links--closed'}`}>
        {LINKS.map((l) => (
          <a
            key={l.key}
            href={l.href}
            style={{ color: active === l.key ? '#EAF4F0' : 'rgba(234,244,240,.6)' }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="/contact"
        className={`acv-nav__cta${contactFilled ? ' acv-nav__cta--filled' : ''}`}
      >
        CONTACT ↗
      </a>
      <button
        type="button"
        className="acv-nav__toggle"
        data-open={open ? 'true' : 'false'}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
      </button>
    </div>
  )
}
