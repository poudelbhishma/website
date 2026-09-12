import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFingerprint,
  faCartShopping,
  faDumbbell,
  faSchool,
  faCar,
  faStore,
  faFilm,
  faBuilding,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import { useData } from '../../context/DataContext'
import { getSkillLogo } from '../Skills/SkillLogos'
import { getAssetUrl } from '../../utils/assetUtils'
import './Projects.css'

const techLogos = [
  { name: '.NET', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
]

const iconMap = {
  faFingerprint,
  faCartShopping,
  faDumbbell,
  faSchool,
  faCar,
  faStore,
  faFilm,
  faBuilding,
}

function getIcon(iconKey) {
  return iconMap[iconKey] || faLaptopCode
}

function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const { myProjects, contributedProjects } = useData()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`projects ${isVisible ? 'visible' : ''}`}
    >
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>

        {/* My Projects */}
        <div className="projects-group">
          <h3 className="projects-group-label">My Projects</h3>
          <div className="projects-grid">
            {myProjects.map((p, idx) => (
              <div key={p.id || idx} className="project-card">
                {p.image && (
                  <div className={`project-card-img${p.darkBg ? ' project-card-img--dark' : ''}`}>
                    <img src={getAssetUrl(p.image)} alt={p.title} />
                  </div>
                )}
                <div className="project-card-header">
                  <span className="project-icon">
                    <FontAwesomeIcon icon={getIcon(p.iconKey)} />
                  </span>
                  {p.tech && (
                    <span className="project-tech">
                      {getSkillLogo(p.tech, 18)}
                      {p.tech}
                    </span>
                  )}
                </div>
                <h4 className="project-name">
                  {p.title}
                  {p.subtitle && <span className="project-subtitle">  {p.subtitle}</span>}
                </h4>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech-logos">
                  {techLogos.map((t) => (
                    <span key={t.name} className="project-tech-logo" title={t.name}>
                      <img src={t.src} alt={t.name} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Contributed Projects */}
        <div className="projects-group">
          <h3 className="projects-group-label">Contributed Projects</h3>
          <div className="projects-grid">
            {contributedProjects.map((p, idx) => (
              <div key={p.id || idx} className="project-card project-card--contributed">
                <div className="project-card-header">
                  <span className="project-icon">
                    <FontAwesomeIcon icon={getIcon(p.iconKey)} />
                  </span>
                  <span className="project-contributed-badge">Contributed</span>
                </div>
                <h4 className="project-name">{p.title}</h4>
                <p className="project-desc">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

