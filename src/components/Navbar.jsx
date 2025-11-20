import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Avis' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const PA_Logo = () => (
    <div className="flex items-center gap-2">
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 48 48" className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#g)" opacity="0.08" />
          <path d="M12 32V12h10.5c5.3 0 8.5 2.9 8.5 7.5S27.8 27 22.5 27H16v5h-4zm4-9h6.2c2.8 0 4.3-1.6 4.3-3.5S25 16 22.2 16H16v7z" fill="#fff" opacity="0.9" />
          <path d="M34 36l-5.6-10H22l3-4h6.4L34 14h4l-4.8 8.4L38 36h-4z" fill="#cbd5e1" opacity="0.75" />
        </svg>
      </div>
      <span className="text-sm tracking-widest text-white/80 font-semibold">P.A.</span>
    </div>
  )

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="group inline-flex items-center gap-3">
          <PA_Logo />
          <span className="sr-only">Peter Akilimali</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white transition-colors">
              {s.label}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 text-white">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 grid grid-cols-2 gap-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="px-3 py-2 rounded-lg text-left text-sm text-white/80 hover:text-white bg-white/5">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
