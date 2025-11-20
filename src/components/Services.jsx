import { motion } from 'framer-motion'

const items = [
  { title: 'Création Web', desc: 'Sites et apps performants, SEO-ready, design premium.' },
  { title: 'Développement Mobile', desc: 'Apps iOS/Android avec expérience native et rapide.' },
  { title: 'UI/UX Design', desc: 'Design systems élégants, prototypes, tests utilisateurs.' },
  { title: '3D & Motion', desc: 'Animations Spline/After Effects, micro-interactions.' },
  { title: 'Automatisation', desc: 'Scripts, intégrations, monitoring, CI/CD.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Services
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="text-white font-medium">{it.title}</div>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
