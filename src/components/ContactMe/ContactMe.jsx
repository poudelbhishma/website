import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './ContactMe.css'

const contactItems = [
  {
    icon: faLocationDot,
    label: 'Location',
    value: 'Kathmandu, Nepal',
    href: null,
  },
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'bhishmapoudel408@gmail.com',
    href: 'mailto:bhishmapoudel408@gmail.com',
  },
  {
    icon: faLinkedin,
    label: 'LinkedIn',
    value: 'bhishma poudel',
    href: 'https://www.linkedin.com/in/bhishma-poudel',
  },
]

function ContactMe() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:bhishmapoudel408@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailto
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`contact-me ${isVisible ? 'visible' : ''}`}
    >
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-badge">
            <FontAwesomeIcon icon={faPaperPlane} />
            Contact Me
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind? Let's connect and build something amazing together.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            {contactItems.map((item, index) => {
              const content = (
                <>
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </>
              )
              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  className="contact-item"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className="contact-item no-link"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {content}
                </div>
              )
            })}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
