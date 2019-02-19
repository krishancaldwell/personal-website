import React from 'react'


function Title(props) {
  return <div className="title-container">
           <h1 className="name"><span> {props.title} </span></h1>
         </div>
}

export default Title
