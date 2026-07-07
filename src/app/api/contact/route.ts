import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getPayload } from 'payload'
import config from '@payload-config'

export const dynamic = 'force-dynamic'

const ALLOWED_TOPICS = ['Strategic Programs', 'Corporate Financial Services']

function escapeHtml(input: string) {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(req: Request) {
  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(body?.name || '').trim()
  const email = String(body?.email || '').trim()
  const topic = String(body?.topic || '').trim()
  const message = String(body?.message || '').trim()

  // Validation
  if (!name || !email || !topic || !message) {
    return NextResponse.json({ error: 'Please fill in all fields.' }, { status: 400 })
  }
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!ALLOWED_TOPICS.includes(topic)) {
    return NextResponse.json({ error: 'Please choose a valid topic.' }, { status: 400 })
  }

  // Persist to Payload (safety net — never lose a lead even if email fails)
  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'submissions',
      data: { name, email, topic, message },
    })
  } catch (e) {
    // Non-fatal: continue to attempt email even if storage fails.
    console.error('Failed to store submission:', e)
  }

  // Send email via SMTP (Office 365 by default)
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_TO || user

  if (!host || !user || !pass || !to) {
    console.error('SMTP is not configured; skipping email send.')
    // Submission was stored (if that worked); tell the client it succeeded.
    return NextResponse.json({ ok: true, emailed: false })
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
      auth: { user, pass },
    })

    const subject = `New enquiry — ${topic}`
    const text = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`
    const html = `
      <h2 style="font-family:Arial,sans-serif;color:#0A4A3F;">New website enquiry</h2>
      <p style="font-family:Arial,sans-serif;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="font-family:Arial,sans-serif;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="font-family:Arial,sans-serif;"><strong>Topic:</strong> ${escapeHtml(topic)}</p>
      <p style="font-family:Arial,sans-serif;"><strong>Message:</strong></p>
      <p style="font-family:Arial,sans-serif;white-space:pre-wrap;">${escapeHtml(message)}</p>
    `

    await transporter.sendMail({
      from: `"acuv Strategy Website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    })

    return NextResponse.json({ ok: true, emailed: true })
  } catch (e) {
    console.error('Failed to send contact email:', e)
    return NextResponse.json(
      { error: 'We could not send your message right now. Please try again later or email us directly.' },
      { status: 502 },
    )
  }
}
