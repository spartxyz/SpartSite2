import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"

const Footer = () => (
  <div className="footer-container" style={{
      backgroundColor: '#1B1B1B',
      width: '100vw',
    }}>
    <div className="footer" style={{
        color: 'white',
        maxWidth: '960px',
        margin: 'auto',
        textAlign: 'center'
      }}>
      <div className="footer-column">
        <div style={{ maxWidth: '60px' }}>
          <Logo/>
        </div>
      </div>
      <div className="footer-column">
        <div className="link-title">Site</div>
        <Link to="/pricing/" className="footer-link">Pricing</Link>
        <Link to="/tutorials/" className="footer-link">Tutorials</Link>
        <Link to="/about/" className="footer-link">About</Link>
        <Link to="/terms-conditions/" className="footer-link">Terms and Conditions</Link>
        <Link to="/privacy-policy/" className="footer-link">Privacy Policy</Link>
      </div>
      <div className="footer-column">
        <div className="link-title">Social</div>
        <Link to="#" className="footer-link">Twitter</Link>
        <Link to="#" className="footer-link">Instagram</Link>
        <Link to="#" className="footer-link">Discord</Link>
        <div className="link-title">The Developer</div>
        <Link to="#" className="footer-link">Twitter</Link>
        <Link to="#" className="footer-link">Website</Link>
      </div>
    </div>
  </div>
)

export default Footer
