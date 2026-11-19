import React from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css"

export const Header = () => {
  return (
    <header id='header'>
      <div className="inner clearfix">
        <h2 className='logo en'>
          <Link to="/">JINHEE</Link>
        </h2>

        <nav className='nav'>
          <ul className='clearfix'>
            <li>
              <Link to="/work">
                <h5 className='en'>PROJECT</h5>
              </Link>
            </li>
            <li>
              <a href="/#about">
                <h5 className='en'>ABOUT</h5>
              </a>
            </li>
            <li>
              <a href="/#contact">
                <h5 className='en'>CONTACT</h5>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
