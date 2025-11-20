import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">À propos</h2>
          <p className="mt-6 text-white/80 leading-relaxed">
            Je développe des produits numériques utiles et beaux. Mon approche mêle rigueur d’ingénierie et sens du détail. Entre le web, le mobile, l’interface et l’animation 3D, je construis des expériences qui inspirent confiance et délivrent de la valeur.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            Étudiant en administration système Linux à l’Université Libre de Kigali, je m’intéresse à la performance, l’automatisation et la fiabilité. Mon objectif: concevoir des interfaces sobres, rapides et mémorables.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="grid sm:grid-cols-2 gap-4">
          {[
            { k: 'Années d’expérience', v: '4+' },
            { k: 'Projets réalisés', v: '25+' },
            { k: 'Stack coeur', v: 'React • Node • Firebase • Linux' },
            { k: 'Spécialités', v: 'UI/UX • 3D • Motion' },
          ].map((item) => (
            <div key={item.k} className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="text-xs uppercase tracking-wider text-white/50">{item.k}</div>
              <div className="mt-1 text-xl text-white">{item.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
