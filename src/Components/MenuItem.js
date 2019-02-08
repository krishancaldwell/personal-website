import React from 'react'
import {Link} from 'react-router-dom'


function MenuItem(props) {
  const title = props.item.title
  return <div>
           <h4 className="menu-item">
             <Link to={`/${title.toLowerCase()}`}>{ title }</Link>
           </h4>
         </div>
}

export default MenuItem
