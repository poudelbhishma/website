import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faLocationDot, faCode } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)

  const roles = ['.NET Developer', 'Software Engineer', 'Full Stack Developer']

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="hero-bg-grid" />

      <div className="hero-content">
        <div className="hero-text">


          <p className="hero-greeting">Hey! there, I'm</p>
          <h1 className="hero-name">Bhishma Poudel</h1>

          <p className="hero-role">
            <FontAwesomeIcon icon={faCode} className="hero-role-icon" />
            <span className="hero-role-text">{roles[typingIndex]}</span>
          </p>

          <p className="hero-description">
            I work with .NET and JavaScript to build web applications
            mostly at Technables IT Solutions, based out of Lalitpur, Nepal.
          </p>

          <p className="hero-location">
            <FontAwesomeIcon icon={faLocationDot} />
            Lalitpur, Nepal
          </p>

          <div className="hero-social">
            <a href="https://www.linkedin.com/in/bhishma-poudel" target="_blank" rel="noopener noreferrer" className="hero-social-link linkedin" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/bs.poudel" target="_blank" rel="noopener noreferrer" className="hero-social-link instagram" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>
            <a href="https://github.com/bhishmapoudel" target="_blank" rel="noopener noreferrer" className="hero-social-link github" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="hero-cta">
            <a href="/BhishmaPoudel_CV.pdf" download className="btn btn-primary">
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </a>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero-image-col">
          <div className="hero-profile-wrapper">
            <div className="hero-profile-glow" />
            <img
              src="/bhishmapoudel.jpg"
              alt="Bhishma Poudel"
              className="hero-profile-img"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
