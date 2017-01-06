import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactHeader">
          <h1 className="contact">CONTACT</h1>
          <h3 className="contactName">ROBERT ZEHNDER</h3>
        </div>
        <div className="contactInfo">
          <span className="mobile"> M: 703.300.3342 </span>
          <span className="email"> E: robzcodes@gmail.com </span>
        </div>
      </div>
    )
  }
}

export default Contact
