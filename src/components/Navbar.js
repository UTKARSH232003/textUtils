import React from 'react'
import PropTypes from 'prop-types'
// gjfjgvj
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.text}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
  {/* List items */}
    

      {/* <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;"> */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">About</a>
        </li>
        

        <li className="nav-item">
        <button className="nav-link active" disabled>Link</button>

          {/* <a className="nav-link disabled">Link</a> */}
        </li>
      </ul>
      
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