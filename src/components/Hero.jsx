import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-950/70 to-slate-950/95 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
            Peter Akilimali
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg sm:text-xl text-white/80 max-w-xl">
            Développeur web & mobile, designer d'interfaces, créateur d'animations 3D et étudiant en administration système Linux (ULK). Je conçois des expériences numériques premium, élégantes et performantes.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-white/90 transition">Voir mes projets</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Me contacter</a>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/70 text-sm">
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10">Web</div>
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10">Mobile</div>
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10">UI/UX</div>
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10">Linux</div>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
