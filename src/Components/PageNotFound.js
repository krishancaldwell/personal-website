import React, {Component} from 'react'

class PageNotFound extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onBackButton()
  }

  render() {
    return <div>
             <div className="circle">404</div>
             <div className="center">
               <h3 className="title">Hmm...</h3>
               <h4>The page you are looking for could not be found</h4>
                 <button className="alert" onClick={this.handleClick}>Go back?</button>
             </div>
           </div>
  }
}

export default PageNotFound
