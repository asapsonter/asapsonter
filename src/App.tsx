import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdireBackground from './components/AdireBackground'
import ScrollManager from './components/ScrollManager'
import Home from './pages/Home'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

// Markdown rendering + syntax highlighting only load when a post is opened.
const PostPage = lazy(() => import('./pages/PostPage'))

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface">
      <ScrollManager />
      <AdireBackground />
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<PostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
