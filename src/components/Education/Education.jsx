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
import { useData } from '../../context/DataContext'
import './Education.css'

function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { education } = useData()

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
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div className="education-timeline">
          <div className="timeline-line"></div>
          {education.map((edu, index) => (
            <div
              key={edu.id || index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`timeline-node node-${edu.nodeColor || 'blue'}`}>
                <FontAwesomeIcon icon={edu.institution?.includes('University') ? faUniversity : faSchool} />
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

