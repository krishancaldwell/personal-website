import React from 'react'
import {Link} from 'react-router-dom'


function SocialSection() {
  return <div className="social-section">
           <p className="social-item">
             <Link to="https://linkedin.com/in/krishancaldwell">LinkedIn</Link>
           </p>
           <p>|</p>
           <p className="social-item">
             <Link to="https://github.com/kthecaldwell">Github</Link>
           </p>
           <p>|</p>
           <p className="social-item">
             <Link to="https://instagram.com/kthecaldwell">Instagram</Link>
           </p>
           <p>|</p>
           <p className="social-item">
             <Link to="mailto:krishan@kcaldwell.me">Email</Link>
           </p>
         </div>
}

export default SocialSection
