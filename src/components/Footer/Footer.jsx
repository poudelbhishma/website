import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { getAssetUrl } from '../../utils/assetUtils'
import './Footer.css'

const socialLinks = [
  { icon: faLinkedin,  href: 'https://www.linkedin.com/in/bhishma-poudel', label: 'LinkedIn',  brandClass: 'linkedin' },
  { icon: faInstagram, href: 'https://www.instagram.com/bs.poudel',         label: 'Instagram', brandClass: 'instagram' },
  { icon: faGithub,    href: 'https://github.com/bhishmapoudel',            label: 'GitHub',    brandClass: 'github' },
]

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={getAssetUrl('/bhishma_logo.png')} alt="Bhishma Poudel" />
          </div>
          <div className="footer-brand-info">
            
            <p className="footer-tagline">Building great software from Nepal</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-social-link ${link.brandClass}`}
                aria-label={link.label}
              >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bhishma Poudel. Made with{' '}
            <FontAwesomeIcon icon={faHeart} className="heart-icon" /> 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
