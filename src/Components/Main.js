import React, {Component} from 'react'
import Title from './Title'
import Menu from './Menu'
import SocialSection from './SocialSection'


class Main extends Component {

  constructor() {
    super()
    this.state = {
      menuItems: []
    }
  }

  componentDidMount() {
    const data = simulateFetchFromDatabase()
    this.setState({
      menuItems: data
    })
  }

  render() {
    return <div className="container">
             <Title title="Krishan Caldwell" />
             <Menu items={this.state.menuItems}/>
             <SocialSection />
           </div>
  }

}

/**
 * This serves no purpose here. In reality if I were getting real stuff from a
 * real DB then I'd put a function to get the data for that here...
 * TODO: Actually make this one day
 */
function simulateFetchFromDatabase() {
  return [
    {
      id: 0,
      title: "Work",
      link: ""
    }, {
      id: 1,
      title: "Info",
      link: ""
    }, {
      id: 2,
      title: "Blog",
      link: ""
    }, {
      id: 3,
      title: "Contact",
      link: ""
    }
  ]
}

export default Main
