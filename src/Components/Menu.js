import React from 'react'
import MenuItem from './MenuItem'
import PropTypes from 'prop-types'

function Menu(props) {
  return <div className="menu-section">

           {props.items.map((item, index) => <MenuItem key={index} item={item} />)}
         </div>
}

Menu.propTypes = {
  items: PropTypes.array.isRequired
}

export default Menu
