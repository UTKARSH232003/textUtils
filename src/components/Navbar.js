import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// gjfjgvj
export default function Navbar(props) {
  return ( 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.text}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
  {/* List items */}
    

      {/* <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        

        <li className="nav-item">
        <button className="nav-link active" disabled>Link</button>

          {/* <a className="nav-link disabled">Link</a> */}
        </li>
      </ul>

      <div className={`form-check form-switch text-${props.mode === 'green'?'#CCFFCC':(props.mode === 'light'?'dark':'light')}`}>
        <input className="form-check-input" onClick={props.toggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
      </div>
      {/* <div className="d-flex">
        <div className="bg-primary" onClick={() => {props.toggleMode('primary')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-danger" onClick={() => {props.toggleMode('danger')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-success" onClick={() => {props.toggleMode('success')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
        <div className="bg-warning" onClick={() => {props.toggleMode('warning')}} style={{height: '30px', width: '30px', cursor: 'pointer'}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode === 'green'?'#CCFFCC':(props.mode === 'light'?'dark':'light')}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttext: PropTypes.string
}

Navbar.defaultProps = {
    title: 'TITLE',
    abouttext: 'ABOUTTEXT'  
}

// export default Navbar;