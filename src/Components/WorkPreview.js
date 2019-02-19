import React from 'react'
import { Link } from 'react-router-dom'
import sosLogo from '../assets/sos_small.png'
import qpayLogo from '../assets/qpay.png'


function WorkPreview() {
  return <div>
           <a href="https://signonsite.com.au" target="_blank" rel="noopener noreferrer">
             <div className="work-entry">
               <img src={sosLogo} alt="SignOnSite" className="company-logo"/>
             </div>
           </a>

           <a href="https://getqpay.com" target="_blank" rel="noopener noreferrer">
             <div className="work-entry">
               <img src={qpayLogo} alt="QPay" className="company-logo"/>
             </div>
           </a>
         </div>
}

export default WorkPreview
