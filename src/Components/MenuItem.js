import React, {Component} from 'react'

class MenuItem extends Component {
  render() {
    const item = this.props.item
    return <a href="#" className="menu-item">
             <h4> {item.title} </h4>
           </a>
  }
}

export default MenuItem
