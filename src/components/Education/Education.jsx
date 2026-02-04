import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faCalendar,
  faMapMarkerAlt,
  faSchool,
  faUniversity,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import './Education.css'

const education = [
  {
    institution: 'Pokhara University',
    degree: "Bachelor's degree, Computer Software",
    period: '2019 - 2024',
    location: 'Pokhara, Nepal',
    description: "Completed Bachelor's degree in Computer Software with focus on modern software development practices, algorithms, data structures, and software engineering principles.",
    icon: faUniversity,
    nodeColor: 'blue',
  },
  {
    institution: 'Shree Rastriya Secondary School',
    degree: 'Diploma in Computer Engineering, Computer Science',
    period: '2016 - 2019',
    location: 'Lalitpur, Nepal',
    description: 'Completed Diploma in Computer Engineering with focus on computer science fundamentals and technical education.',
    icon: faSchool,
    nodeColor: 'green',
  },
  {
    institution: 'Shree Rastriya Secondary School',
    degree: 'Lower School',
    period: '2006 - 2016',
    location: 'Lalitpur, Nepal',
    description: 'Completed lower school education with strong foundation in core subjects.',
    icon: faSchool,
    nodeColor: 'green',
  },
]

function Education() {
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
      id="education"
      ref={sectionRef}
      className={`education ${isVisible ? 'visible' : ''}`}
    >
      <div className="education-container">
        <div className="education-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faGraduationCap} />
            Education
          </span>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="education-timeline">
          <div className="timeline-line"></div>
          {education.map((edu, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`timeline-node node-${edu.nodeColor}`}>
                <FontAwesomeIcon icon={edu.icon} />
              </div>
              <div className="timeline-connector"></div>
              <div className="timeline-card">
                <div className="card-header">
                  <span className="card-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    {edu.period}
                  </span>
                  <span className="card-status">COMPLETED</span>
                </div>
                <h3 className="card-title">{edu.degree}</h3>
                <p className="card-institution">
                  <FontAwesomeIcon icon={faBuilding} className="card-icon" />
                  {edu.institution}
                </p>
                <p className="card-location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="card-icon" />
                  {edu.location}
                </p>
                <p className="card-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
