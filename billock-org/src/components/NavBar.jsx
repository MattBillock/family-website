import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


import Matt from './people/Matt'
import Kiley from './people/Kiley'
import Luella from './people/Luella'
import Connor from './people/Connor'

function Home() {
  return (
    <div>
      <h2>
      </h2>
    </div>
  );
}

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/matt"><img className="circleimage" src="images/matt.jpg" alt="Matt" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/kiley"><img className="circleimagerot" src="images/kiley.jpg" alt="Kiley" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/luella"><img className="circleimage" src="images/luella.jpg" alt="Luella" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/connor"><img className="circleimage" src="images/connor.jpg" alt="Connor" /></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/matt" element="<Matt />" />
            <Route path="/kiley" element="<Kiley />" />
            <Route path="/luella" element="<Luella />" />
            <Route path="/connor" elemen="<Connor />" />
          </Routes>
        </div>
      </Router>
    )
  }
}
