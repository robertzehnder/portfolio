import React, { Component } from 'react'

class Works extends Component {
  render() {
    return (
      <div className="worksContainer">
        <h1 className="works">WORKS</h1>
        <div className="projects">
          <a href="https://pgatour-api-by-robz.herokuapp.com/"> <div className="pgaapi picture"></div> </a>
          <a href="https://robertzehnder.github.io/#/welcome"> <div className="drift picture"></div> </a>
          <a href="https://robz-simon.herokuapp.com/index.html"> <div className="simon picture"></div> </a>
        </div>
      </div>
    )
  }
}

export default Works
