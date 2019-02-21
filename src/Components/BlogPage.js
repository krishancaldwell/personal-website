import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class BlogPage extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onBackButton()
  }

  render() {
    return <div>
             <div className="circle">Soon</div>
             <div className="center">
               <h3 className="title">In progress</h3>
               <h4>Currently working on the backend for this.</h4>
                 <button className="alert"><Link to="/" className="back-link">Go back?</Link></button>
             </div>
           </div>
  }
}

export default BlogPage
