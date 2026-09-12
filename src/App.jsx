import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import AdminPanel from './components/Admin/AdminPanel'
import './App.css'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname)
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  const path = currentPath.toLowerCase()
  const hash = currentHash.toLowerCase()
  const search = window.location.search.toLowerCase()

  const isAdmin =
    path.endsWith('/access') ||
    path.endsWith('/access/') ||
    hash === '#/access' ||
    hash === '#/access/' ||
    search.includes('access=true') ||
    search.includes('admin=true')

  if (isAdmin) {
    return <AdminPanel />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ContactMe />
        <Footer />
      </main>
    </>
  )
}

export default App

