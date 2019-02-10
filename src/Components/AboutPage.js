import React from 'react'
import profilePicture from '../assets/krishan_small.jpg'

function AboutPage() {
  return <div className="about-section">
           <div className="about-container">
             <img src={profilePicture} alt="Krishan" className="headshot"/>
             <div className="profile-section">
               <h5>Krishan Caldwell</h5>
               <p>Age: 29</p>
             </div>
             <div className="profile-section">
               <p>Currently: Tokyo, Japan</p>
               <p>From: Canberra, Australia</p>
             </div>
           </div>
           <div className="about-container">
             <p>Hello</p>
           </div>
         </div>
}

export default AboutPage
