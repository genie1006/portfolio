import React from 'react'
import "../css/header.css"

export const Header = () => {
  return (
    <header id='header'>
      <div className="inner clearfix">
        <h1 className='logo en'>JINHEE</h1>
        <nav className='nav'>
          <ul className='clearfix'>
            <li><h5 className='en'>PROJECT</h5></li>
            <li><h5 className='en'>ABOUT</h5></li>
            <li><h5 className='en'>CONTACT</h5></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
