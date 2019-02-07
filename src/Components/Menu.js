import React from 'react'
import MenuItem from './MenuItem'

function Menu(props) {
  return <div className="menu-section">
           {props.items.map((item, index) => <MenuItem key={index} item={item} />)}
         </div>
}

export default Menu
