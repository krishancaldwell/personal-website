import React from 'react'
import {Link} from 'react-router-dom'


function SocialSection() {
  return <div className="social-section">
           <p className="social-item">
             <a href="https://linkedin.com/in/krishancaldwell">LinkedIn</a>
           </p>
           <p>|</p>
           <p className="social-item">
             <a href="https://github.com/kthecaldwell">Github</a>
           </p>
           <p>|</p>
           <p className="social-item">
             <a href="https://instagram.com/kthecaldwell">Instagram</a>
           </p>
           <p>|</p>
           <p className="social-item">
             <a href="mailto:krishan@kcaldwell.me">Email</a>
           </p>
         </div>
}

export default SocialSection
