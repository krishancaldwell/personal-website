import React, {Component} from 'react'
import Title from './Title'
import Menu from './Menu'
import SocialSection from './SocialSection'


const menuItems = [{
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
  }]

class Main extends Component {
  render() {
    return <div className="container">
             <Title title="Krishan Caldwell" />
             <Menu items={menuItems}/>
             <SocialSection />
           </div>
  }
}

export default Main

// <MenuItem item={'Work'}></MenuItem>
// <MenuItem item={'Info'}></MenuItem>
// <MenuItem item={'Blog'}></MenuItem>
// <MenuItem item={'Contact'}></MenuItem>
