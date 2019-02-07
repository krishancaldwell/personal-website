import React, {Component} from 'react'


function MenuItem(props) {
  const item = props.item
  return <a href="#" className="menu-item">
           <h4> {item.title} </h4>
         </a>
}

export default MenuItem
