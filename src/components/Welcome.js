import React, { Component } from 'react'
import '../Welcome.css'

class Welcome extends Component {
  // componentDidMount(){
  //   document.body.style.backgroundColor = "red"// Set the style
  //   // document.body.className="body-component-a" // Or set the class
  // }
  render() {
    return (
      <div className="welcomeContent">
        <div className="name">
          <h1 className="bradley">ROBERT</h1>
          <h1 className="cravens">ZEHNDER</h1>
          <div className="cat"></div>
        </div>
      <h2 className="title">DATA ENGINEER</h2>
      </div>
    )
  }
}

export default Welcome
