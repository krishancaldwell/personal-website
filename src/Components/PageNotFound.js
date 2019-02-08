import React from 'react'
import {Link} from 'react-router-dom'

function PageNotFound() {
  return <div>
           <div className="circle">404</div>
           <div className="center">
             <h3 className="title">Hmm...</h3>
             <h4>The page you are looking for could not be found</h4>
             <Link to="/">
               <h3 className="alert">Go back?</h3>
             </Link>
           </div>
         </div>
}

export default PageNotFound
