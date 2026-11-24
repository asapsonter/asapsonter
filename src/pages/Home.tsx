import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import LatestPosts from '../components/LatestPosts'
import Contact from '../components/Contact'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function Home() {
  useDocumentTitle()
  return (
    <>
      <Hero />
      <div className="tribal-line max-w-6xl mx-auto" />
      <About />
      <div className="tribal-line max-w-6xl mx-auto" />
      <Skills />
      <div className="tribal-line max-w-6xl mx-auto" />
      <Projects />
      <LatestPosts />
      <div className="tribal-line max-w-6xl mx-auto" />
      <Contact />
    </>
  )
}
