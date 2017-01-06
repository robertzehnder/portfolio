import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router'
import '../NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">

        <Link to="/">
          <Button label="HOME" />
        </Link>

        <Link to="/about">
          <Button label="ABOUT" />
        </Link>

        <Link to="/works">
          <Button label="WORKS" />
        </Link>

        <Link to="/contact">
          <Button label="CONTACT" />
        </Link>

      </div>
    )
  }
}

export default NavBar
