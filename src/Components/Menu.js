import React, {Component} from 'react'
import MenuItem from './MenuItem'

class Menu extends Component {
  render() {
    return <div className="menu-section">
             {this.props.items.map((item, index) => <MenuItem key={index} item={item} />)}
           </div>
  }
}

export default Menu
