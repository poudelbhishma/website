import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/bhishma-poudel',
    label: 'LinkedIn',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/bs.poudel',
    label: 'Instagram',
  },
  {
    icon: faGithub,
    href: 'https://github.com/bhishmapoudel',
    label: 'GitHub',
  },
]

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="footer">
      <button
        className="footer-scroll-top"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <div className="footer-content">
        <div className="footer-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="footer-nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="footer-social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={link.label}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bhishma Poudel. Made with{' '}
            <FontAwesomeIcon icon={faHeart} className="heart-icon" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
