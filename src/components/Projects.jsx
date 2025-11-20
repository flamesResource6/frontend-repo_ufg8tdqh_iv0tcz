import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Revolution Company',
    tags: ['Web Mobile', 'HTML/CSS/JS', 'Firebase', 'Maps'],
    summary: "Application web mobile avec intégration des cartes, authentification Firebase et UI performante.",
  },
  {
    title: 'Forever United',
    tags: ['Humanitaire', 'Site Web'],
    summary: "Plateforme claire et crédible pour une ONG, axée sur la transparence et l'impact.",
  },
  {
    title: 'Application scolaire Windows Forms',
    tags: ['Desktop', 'C#', 'Education'],
    summary: "Gestion académique locale, formulaires rapides, export et contrôle des accès.",
  },
  {
    title: 'Animations 3D pour UI web',
    tags: ['3D', 'Spline', 'Motion'],
    summary: "Micro-interactions 3D immersives intégrées à des interfaces sobres.",
  },
  {
    title: 'Programme TikTok Live interactif',
    tags: ['Live', 'Temps réel'],
    summary: "Système interactif pour lives, avec overlays dynamiques et automation.",
  },
  {
    title: 'Projet FAT 2025 — Linux Administration (TC002)',
    tags: ['Linux', 'Infra'],
    summary: "Mise en place et sécurisation d'environnements Linux avec monitoring et backups.",
  },
  // Fictifs mais réalistes
  {
    title: 'AtlasPay — Mini Fintech P2P',
    tags: ['Fintech', 'Next.js', 'Design System'],
    summary: "Prototype de wallet P2P avec onboarding fluide, KYC simplifié et design premium.",
  },
  {
    title: 'NOVA Learn — Plateforme e-learning',
    tags: ['EdTech', 'React Native', 'Firebase'],
    summary: "Application d'apprentissage mobile avec parcours, quiz et gamification légère.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Projets sélectionnés
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {projects.map((p, idx) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (idx % 2) * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md">
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-white font-medium">{p.title}</div>
                  <div className="text-xs text-white/60">{p.tags.join(' • ')}</div>
                </div>
                <p className="mt-3 text-white/70">{p.summary}</p>
                <div className="mt-4 text-sm text-white/60">Rôle: design, architecture, dev, QA.</div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )}
