import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faQuoteLeft, faCode, faRocket } from '@fortawesome/free-solid-svg-icons'
import './AboutMe.css'

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-me ${isVisible ? 'visible' : ''}`}
    >
      <div className="about-container">
        <div className="about-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faUser} />
            About Me
          </span>
          <h2 className="section-title">Who I Am</h2>
        </div>
        <div className="about-content">
          <div className="about-card">
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            <p className="about-text">
              I'm a passionate <strong>Software Engineer</strong> and{' '}
              <strong>Dot Net Developer</strong> based in Nepal, dedicated to
              building robust and scalable web applications. With nearly 2 years
              of experience at Technables IT Solutions, I specialize in creating
              elegant solutions to complex problems.
            </p>
            <p className="about-text">
              My expertise spans across full-stack development, with a strong
              focus on <strong>JavaScript</strong>, <strong>CSS</strong>, and{' '}
              <strong>Web Development</strong>. I'm constantly learning and
              evolving to stay at the forefront of technology.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <span>Clean & Maintainable Code</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <span>Performance Focused</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
