import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCalendar,
  faMapMarkerAlt,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import './Experience.css'

const experiences = [
  {
    company: 'Technables IT Solutions',
    role: 'Software Engineer',
    period: 'April 2024 - Present',
    duration: '1 year 11 months',
    location: 'Kathmandu District, Nepal',
    description: 'Full-time Software Engineer role. Working on software development, building robust and scalable applications. Responsibilities include October 2024 - February 2026 in Kathmandu, Bāgmatī, Nepal.',
    icon: faBuilding,
    nodeColor: 'blue',
  },
  {
    company: 'Technables IT Solutions',
    role: 'Intern',
    period: 'October 2023 - April 2024',
    duration: '6 months',
    location: 'Kathmandu District, Nepal',
    description: 'Software development intern. Gained hands-on experience in modern software development practices, contributed to real-world projects, and developed strong technical skills.',
    icon: faBuilding,
    nodeColor: 'green',
  },
]

function Experience() {
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
      id="experience"
      ref={sectionRef}
      className={`experience ${isVisible ? 'visible' : ''}`}
    >
      <div className="experience-container">
        <div className="experience-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faBriefcase} />
            Experience
          </span>
          <h2 className="section-title">Work History</h2>
        </div>
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`timeline-node node-${exp.nodeColor}`}>
                <FontAwesomeIcon icon={exp.icon} />
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <span className="card-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    {exp.period}
                  </span>
                  <span className="card-status">{exp.duration}</span>
                </div>
                <h3 className="card-title">{exp.role}</h3>
                <p className="card-institution">
                  <FontAwesomeIcon icon={faBuilding} className="card-icon" />
                  {exp.company}
                </p>
                <p className="card-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon" />
                  {exp.location}
                </p>
                <p className="card-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
