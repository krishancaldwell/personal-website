import React from 'react'
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

function Main() {
  return <div className="container">
           <Title title="Krishan Caldwell" />
           <Menu items={menuItems}/>
           <SocialSection />
         </div>
}

export default Main
