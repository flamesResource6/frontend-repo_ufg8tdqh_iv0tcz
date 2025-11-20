import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'M. Kabera — Directeur ONG',
    quote: 'Professionnalisme irréprochable. Le site a transformé notre visibilité auprès des donateurs.',
  },
  {
    name: 'A. Uwimana — Chef de projet',
    quote: 'Peter allie sens du détail et efficacité. Le delivery était impeccable et en avance.',
  },
  {
    name: 'S. Niyonzima — CTO',
    quote: "Excellente compréhension produit. Design premium et code propre, prêt pour l'échelle.",
  },
  {
    name: 'J. Habimana — Entrepreneur',
    quote: 'Résultats concrets. Conversion en hausse dès la première semaine.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Avis
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <p className="text-white/80">“{t.quote}”</p>
              <div className="mt-3 text-sm text-white/60">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
