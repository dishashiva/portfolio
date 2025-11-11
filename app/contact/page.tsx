"use client"
import { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<null | string>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus(data.error || 'error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Let’s connect</h1>
        <p className="text-gray-600 mb-8">Whether you need a UI audit, a design sprint, or a chat about project management over coffee, my inbox is open.</p>

        <div className="space-y-4">
          <a href="mailto:dishashiva11@gmail.com" className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-sky-100 grid place-items-center text-sky-700">@</span>
            <span>dishashiva11@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/dishas05" target="_blank" rel="noreferrer" className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-sky-100 grid place-items-center text-sky-700">in</span>
            <span>in/dishas05</span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 space-y-5">
        <h2 className="font-semibold text-lg">Or drop a line</h2>
        <input required type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600" />
        <input required type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600" />
        <textarea required name="message" rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"></textarea>
        <div className="flex items-center gap-4">
          <button type="submit" className="px-5 py-2.5 rounded-lg bg-sky-600 text-white text-sm font-semibold shadow hover:bg-sky-700">Send</button>
          {status === 'sending' && <span className="text-sm text-gray-500">Sending…</span>}
          {status === 'sent' && <span className="text-sm text-green-600">Message sent — thank you!</span>}
          {status && status !== 'sending' && status !== 'sent' && status !== 'error' && <span className="text-sm text-red-600">{status}</span>}
          {status === 'error' && <span className="text-sm text-red-600">Error sending message.</span>}
        </div>
      </form>
    </section>
  )
}
