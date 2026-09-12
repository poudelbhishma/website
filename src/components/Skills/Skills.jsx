import { useEffect, useRef, useState } from 'react'
import { getSkillLogo } from './SkillLogos'
import { useData } from '../../context/DataContext'
import './Skills.css'

function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedLevels, setAnimatedLevels] = useState({})
  const sectionRef = useRef(null)
  const { skills } = useData()

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
  }, [skills])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills ${isVisible ? 'visible' : ''}`}
    >
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const skillColor = skill.color || '#2563EB'
            const labelColor = skill.textColor || skillColor
            return (
              <div
                key={skill.id || index}
                className="skill-box"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  '--skill-color': skillColor,
                }}
              >
                <div
                  className="skill-box-icon"
                  style={{
                    background: `${skillColor}15`,
                  }}
                >
                  {getSkillLogo(skill.name, 40)}
                </div>
                <h3 className="skill-box-name">{skill.name}</h3>
                <div className="skill-progress">
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-fill"
                      style={{
                        width: isVisible ? `${animatedLevels[index] ?? 0}%` : '0%',
                        backgroundColor: skillColor,
                        boxShadow: `0 0 10px ${skillColor}66`,
                      }}
                    />
                  </div>
                  <span
                    className="skill-progress-label"
                    style={{ color: labelColor }}
                  >
                    {animatedLevels[index] ?? 0}%
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills


