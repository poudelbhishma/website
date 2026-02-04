import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typingIndex, setTypingIndex] = useState(0)

  const roles = ['Dot Net Developer', 'Software Engineer', 'Full Stack Developer']

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
      <div className="hero-bg">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
        <div className="hero-grid-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="hero-profile-wrapper">
          <div className="hero-profile-glow"></div>
          <img
            src="/bhishmapoudel.jpg"
            alt="Bhishma Poudel"
            className="hero-profile-img"
          />
        </div>
        <div className="hero-badge">
          <FontAwesomeIcon icon={faRocket} className="hero-badge-icon" />
          <span>Software Engineer</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-name">Bhishma Poudel</span>
          <span className="hero-role">
            <span className="hero-role-text">{roles[typingIndex]}</span>
            <span className="hero-role-cursor">|</span>
          </span>
        </h1>
        <p className="hero-location">
          <FontAwesomeIcon icon={faLaptopCode} />
          Lalitpur District, Nepal
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">2+</span>
            <span className="hero-stat-label">Years Exp</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">.NET</span>
            <span className="hero-stat-label">Specialty</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num">Nepal</span>
            <span className="hero-stat-label">Based</span>
          </div>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/bhishma-poudel" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/bs.poudel" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/bhishmapoudel" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="hero-cta">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection('about')}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
