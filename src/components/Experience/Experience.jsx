import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase,
  faCalendar,
  faMapMarkerAlt,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { calculateDuration, CAREER_START_DATE } from '../../utils/dateUtils'
import { useData } from '../../context/DataContext'
import './Experience.css'

function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { experiences } = useData()

  const earliestDate = experiences.reduce((earliest, exp) => {
    if (!exp.startDate) return earliest
    return exp.startDate < earliest ? exp.startDate : earliest
  }, CAREER_START_DATE)

  const totalExperienceText = calculateDuration(earliestDate, null, false)

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
            {totalExperienceText} Total Experience
          </span>
          <h2 className="section-title">Work History</h2>
        </div>
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => {
            const computedDuration = exp.startDate
              ? calculateDuration(exp.startDate, exp.endDate, false)
              : exp.period
            return (
              <div
                key={exp.id || index}
                className="timeline-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`timeline-node node-${exp.nodeColor || 'blue'}`}>
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div className="timeline-connector"></div>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="card-date">
                      <FontAwesomeIcon icon={faCalendar} />
                      {exp.period}
                    </span>
                    <span className="card-status">{computedDuration}</span>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience


