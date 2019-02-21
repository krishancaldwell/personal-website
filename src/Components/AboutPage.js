import React from 'react'
import profilePicture from '../assets/krishan_small.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

function AboutPage() {
  return <div className="about-section">
           <div className="about-container">
             <div className="headshot-section">
               <img src={profilePicture} alt="Krishan" className="headshot"/>
             </div>
             <div className="profile-section">
               <h5 className="heading">Krishan Caldwell</h5>
               <h5 className="heading-subtitle">「カルドウェル・クリシャン」</h5>
             </div>
             <div className="profile-section">
               <table className="info-table">
                 <tbody>
                   <tr>
                     <td className="icon-cell"><FontAwesomeIcon icon={faMapMarkerAlt} /></td>
                     <td><p>Currently: Tokyo, Japan</p></td>
                   </tr>
                   <tr>
                     <td></td>
                     <td><p>From: Canberra, Australia</p></td>
                   </tr>
                 </tbody>
               </table>
               <table className="info-table">
                 <tbody>
                   <tr>
                     <td className="icon-cell"><FontAwesomeIcon icon={faLaptopCode}/></td>
                     <td><p>Android (Java / Kotlin)</p></td>
                   </tr>
                   <tr>
                     <td className="icon-cell"></td>
                     <td><p>PHP</p></td>
                   </tr>
                   <tr>
                     <td className="icon-cell"></td>
                     <td><p>Javascript</p></td>
                   </tr>
                   <tr>
                     <td className="icon-cell"><FontAwesomeIcon icon={faServer}/></td>
                     <td><p>Infrastructure</p></td>
                   </tr>
                   <tr>
                     <td className="icon-cell"><FontAwesomeIcon icon={faProjectDiagram}/></td>
                     <td><p>Product Design</p></td>
                   </tr>
                 </tbody>
               </table>


             </div>
           </div>
           <div className="about-container">
             <h5 className="heading">Background</h5>
             <p className="bio-section">
               Hello! I'm an entrepreneur and software engineer currently
               living in Tokyo.
             </p>
             <p className="bio-section">
               Previously I was the Co-Founder and CTO of a successful B2B SaaS startup
               in Australia called <a href="https://signonsite.com.au" target="_blank" rel="noopener noreferrer">SignOnSite</a>.
               I grew the company from 2 to 13 employees, saw us build some pretty
               challenging technology, and make some real disruption in an industry
               just as it became ripe for it growing to over 100,000 users across
               5 countries just over 2 years after launching the product.
             </p>
             <p className="bio-section">
               These days I spend my days doing contract work and am keen to get
               connected into the Japanese Startup community.
             </p>
             <p className="bio-section">
               I'm always happy to catchup and talk about anything startups related.
             </p>
             <p className="bio-section">
               Feel free to get in touch with me at <a href="mailto:krishan@kcaldwell.me" target="_blank" rel="noopener noreferrer">krishan@kcaldwell.me</a>
             </p>
           </div>
         </div>
}

export default AboutPage

// I'm an entrepreneur and developer living in Tokyo
// In australia i was CTO of a fast growing startup
// during this time i did x y z
// i'm in japan now and keen to become part of the
// community and do stoof
// play soccer
