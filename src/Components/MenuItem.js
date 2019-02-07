import React from 'react'
import {Link} from 'react-router-dom'


function MenuItem(props) {
  const title = props.item.title
  return <Link to={`/${title.toLowerCase()}`} className="menu-item">
           <h4> {title} </h4>
         </Link>
}

export default MenuItem
