import React from 'react'
import NavBar from '../containers/NavBar'
import '../styles.css'

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="content">
        {this.props.children}
        </div>
        <div className="blueBackground"></div>
        <NavBar />
      </div>
    )
  }
}

export default App
