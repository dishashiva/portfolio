import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // accept either generic SMTP env vars or the older YAHOO_* vars
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receive = process.env.RECEIVE_EMAIL || user;
  console.log('SMTP user:', user, 'receive:', receive)

  if (!user || !pass) {
    return NextResponse.json({ error: 'SMTP credentials not configured on server' }, { status: 500 })
  }

  // Define mail options
  const mailOptions = {
    from: user,
    to: receive,
    replyTo: email,
    subject: `New contact from ${name}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
  }

  // Try SMTP connection options in order to help diagnose network/port/TLS issues.
  // Yahoo commonly supports port 465 (secure) and 587 (STARTTLS).
  const smtpAttempts = [
    { host: 'smtp.gmail.com', port: 587, secure: false },
  ]

  let lastError: any = null

  for (const opt of smtpAttempts) {
    const transporter = nodemailer.createTransport({
      host: opt.host,
      port: opt.port,
      secure: !!opt.secure,
      auth: { user, pass },
      logger: true,
      debug: true,
      requireTLS: !!opt.requireTLS,
      tls: { rejectUnauthorized: false }
    })

    try {
      // verify will attempt to connect and perform the SMTP handshake
      await transporter.verify()
      console.log(`SMTP verified using ${opt.host}:${opt.port} (secure=${opt.secure})`)
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ ok: true })
    } catch (err: any) {
      // log and continue to next option
      console.error(`SMTP attempt failed for ${opt.host}:${opt.port}`, err)
      lastError = err
    }
  }

  console.error('All SMTP attempts failed', lastError)
  return NextResponse.json({ error: 'Failed to send email', details: lastError?.message || null }, { status: 500 })
}
