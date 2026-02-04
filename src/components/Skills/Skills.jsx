import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faDatabase,
  faCode,
  faServer,
  faPlug,
  faSearch,
  faGlobe,
  faTasks,
} from '@fortawesome/free-solid-svg-icons'
import {
  faHtml5,
  faCss3,
  faJs,
  faGit,
  faPhp,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'
import './Skills.css'

const skills = [
  { name: '.NET', icon: faMicrosoft, level: 85, color: '#512BD4', lightIcon: false },
  { name: 'JavaScript', icon: faJs, level: 88, color: '#F7DF1E', lightIcon: true },
  { name: 'Web Development', icon: faGlobe, level: 90, color: '#2563EB', lightIcon: false },
  { name: 'HTML', icon: faHtml5, level: 90, color: '#E34F26', lightIcon: false },
  { name: 'C# Entity Framework', icon: faMicrosoft, level: 80, color: '#512BD4', lightIcon: false },
  { name: 'MySQL', icon: faDatabase, level: 85, color: '#4479A1', lightIcon: false },
  { name: 'CSS', icon: faCss3, level: 92, color: '#1572B6', lightIcon: false },
  { name: 'Agile Methodology', icon: faTasks, level: 88, color: '#0052CC', lightIcon: false },
  { name: 'Elastic Search', icon: faSearch, level: 72, color: '#005571', lightIcon: false },
  { name: 'Git', icon: faGit, level: 88, color: '#F05032', lightIcon: false },
  { name: 'DevOps', icon: faServer, level: 75, color: '#0DB7ED', lightIcon: false },
  { name: 'APIs', icon: faPlug, level: 82, color: '#6C63FF', lightIcon: false },
  { name: 'SQL', icon: faDatabase, level: 85, color: '#336791', lightIcon: false },
  { name: 'PHP', icon: faPhp, level: 78, color: '#777BB4', lightIcon: false },
  { name: 'jQuery', icon: faJs, level: 85, color: '#F7DF1E', lightIcon: true },
  { name: 'C', icon: faCode, level: 75, color: '#A8B9CC', lightIcon: false },
]

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState({})
  const sectionRef = useRef(null)

  useEffect(() => {
    const timersRef = { current: [] }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          skills.forEach((skill, i) => {
            const t = setTimeout(() => {
              setAnimatedLevels((prev) => ({ ...prev, [i]: skill.level }))
            }, i * 80)
            timersRef.current.push(t)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      observer.disconnect()
      timersRef.current.forEach(clearTimeout)
    }
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills ${isVisible ? 'visible' : ''}`}
    >
      <div className="skills-container">
        <div className="skills-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faStar} />
            Skills
          </span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-box"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`skill-box-icon ${skill.lightIcon ? 'skill-box-icon--light' : ''}`}
                style={{
                  color: skill.color,
                  background: `${skill.color}18`,
                }}
              >
                <FontAwesomeIcon icon={skill.icon} />
              </div>
              <h3 className="skill-box-name">{skill.name}</h3>
              <div className="skill-progress">
                <div className="skill-progress-track">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: isVisible ? `${animatedLevels[index] ?? 0}%` : '0%',
                    }}
                  />
                </div>
                <span className="skill-progress-label">
                  {animatedLevels[index] ?? 0}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
