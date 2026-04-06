import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdireBackground from './components/AdireBackground'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface">
      <AdireBackground />
      <div className="relative z-10 w-full">
        <Navbar />
        <Hero />
        <div className="tribal-line max-w-6xl mx-auto" />
        <About />
        <div className="tribal-line max-w-6xl mx-auto" />
        <Skills />
        <div className="tribal-line max-w-6xl mx-auto" />
        <Projects />
        <div className="tribal-line max-w-6xl mx-auto" />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
