import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Web',
    items: ['React', 'Next.js', 'Node.js', 'Express', 'Firebase', 'Tailwind', 'MongoDB'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter (bases)', 'Android Studio'],
  },
  {
    title: 'Systèmes & Cloud',
    items: ['Linux (Admin)', 'Bash', 'Docker', 'NGINX', 'CI/CD', 'GCP/Firebase'],
  },
  {
    title: 'UI/UX & 3D',
    items: ['Figma', 'Framer', 'Spline', 'After Effects', 'Motion Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Compétences
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="text-white font-medium">{g.title}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="px-3 py-1 rounded-lg text-sm bg-white/10 text-white/80">{i}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
