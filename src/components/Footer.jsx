export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>© {new Date().getFullYear()} Peter Akilimali — Tous droits réservés.</div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <span className="opacity-40">•</span>
          <a href="#projects" className="hover:text-white transition">Projets</a>
        </div>
      </div>
    </footer>
  )
}
