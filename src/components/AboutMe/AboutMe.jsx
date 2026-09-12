import { useEffect, useRef, useState } from 'react'
import { calculateDuration } from '../../utils/dateUtils'
import { useData } from '../../context/DataContext'
import './AboutMe.css'

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { aboutMe } = useData()

  const experienceText = calculateDuration(aboutMe.startDate || '2023-10-01')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.15 }
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
        <h2 className="about-title">About Me</h2>

        <div className="about-content">
          <div className="about-bio">
            {Array.isArray(aboutMe.bio) ? (
              aboutMe.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            ) : (
              <p>{aboutMe.bio}</p>
            )}
          </div>

          <div className="about-aside">
            <div className="about-detail">
              <span className="about-detail-label">Role</span>
              <span className="about-detail-value">{aboutMe.role}</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Company</span>
              <span className="about-detail-value">{aboutMe.company}</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Experience</span>
              <span className="about-detail-value">{experienceText}</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Location</span>
              <span className="about-detail-value">{aboutMe.location}</span>
            </div>
            <div className="about-detail">
              <span className="about-detail-label">Stack</span>
              <span className="about-detail-value">{aboutMe.stack}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe


