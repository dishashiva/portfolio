import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receive = process.env.RECEIVE_EMAIL || user;
  
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

  let lastError: any = null

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    })

    try {
      // verify will attempt to connect and perform the SMTP handshake
      await transporter.verify()
      await transporter.sendMail(mailOptions)
      return NextResponse.json({ ok: true })
    } catch (err: any) {
      // log and continue to next option
      lastError = err
    }
  

  console.error('All SMTP attempts failed', lastError)
  return NextResponse.json({ error: 'Failed to send email', details: lastError?.message || null }, { status: 500 })
}
