import React from 'react'
import sosLogo from '../assets/sos_small.png'
import qpayLogo from '../assets/qpay.png'
import hnrLogo from '../assets/hacker_news_logo.png'


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

           <a href="https://github.com/kthecaldwell/android-hacker-news-reader" target="_blank" rel="noopener noreferrer">
             <div className="work-entry">
               <img src={hnrLogo} alt="Hacker News Android app" className="company-logo"/>
             </div>
           </a>
         </div>
}

export default WorkPreview
