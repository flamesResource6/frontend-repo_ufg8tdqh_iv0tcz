import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Ambient gradient + subtle noise */}
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_-20%,rgba(148,163,184,0.15),transparent),radial-gradient(1200px_600px_at_90%_0%,rgba(148,163,184,0.12),transparent)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
