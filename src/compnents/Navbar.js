import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
     <nav className={`navbar md:navbar-expand navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog className="drawer drawer-end" tabindex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
      <div className="drawer-header">
        <h5 className="drawer-title" id="navbarDrawerLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div className="drawer-body mb-2 md:mb-0">
        <ul className="nav navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.About}</Link>
          </li>
        </ul>
        {/* <form className="hstack gap-2" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn-solid btn-icon theme-secondary" type="submit">
            <svg className="bi" width="16" height="16"><use href="#search" /></svg>
          </button>
        </form> */}
        <div className="form-field">
  <div className="switch">
    <input type="checkbox" onClick={props.toggleMode} id="switchMdLabel" role="switch" switch/>
  </div>
  <label htmlFor="switchMdLabel"> Enable dark mode</label>
</div>
      </div>
    </dialog>
  </div>
</nav>
  )
}
Navbar.prototype = {
    title : PropTypes.string,
    About : PropTypes.string
}