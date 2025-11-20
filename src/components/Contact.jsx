import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    // Demo only – would send to backend or email service
    setTimeout(() => setStatus('Message envoyé. Merci !'), 800)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Contact
        </motion.h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Nom" required />
              <input type="email" className="px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" required />
            </div>
            <input className="mt-4 px-4 py-3 w-full rounded-xl bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Sujet" />
            <textarea rows="5" className="mt-4 px-4 py-3 w-full rounded-xl bg-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Message" required />
            <div className="mt-4 flex items-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition">
                Envoyer
              </button>
              <span className="text-white/60 text-sm">{status}</span>
            </div>
          </form>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="text-white font-medium">Travaillons ensemble</div>
            <p className="mt-2 text-white/70">
              Pour une mission freelance, un stage ou un projet ambitieux, je réponds sous 24h.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Basé à Kigali</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">FR • EN</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Disponible: Remote/Hybrid</div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">Réponse: {'< 24h'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
