import { motion } from 'framer-motion'

const steps = [
  { n: '1', t: 'Exploration', d: 'Cadrage des objectifs, contraintes et succès mesurables.' },
  { n: '2', t: 'Design', d: 'Wireframes → prototypes → design system propre et cohérent.' },
  { n: '3', t: 'Build', d: 'Architecture, développement, tests et revues.' },
  { n: '4', t: 'Delivery', d: 'Mise en production, monitoring, itérations.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Process
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="text-xs text-white/60">Étape {s.n}</div>
              <div className="mt-1 text-white font-medium">{s.t}</div>
              <p className="mt-2 text-white/70">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
