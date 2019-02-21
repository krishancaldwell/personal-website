import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return <div className="footer">
           <p className="site-links"><Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/work">Work</Link> | <Link to="/blog">Blog</Link> | <Link to="/contact">Contact</Link></p>
           <p className="copyright">© {new Date().getFullYear()}</p>
         </div>
}

export default Footer
