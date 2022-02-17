import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
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
      <h2>Home</h2>
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
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to="/Matt"><img className="circleimage" src="images/matt.jpg" alt="Matt" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/Kiley"><img className="circleimagerot" src="images/kiley.jpg" alt="Kiley" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="/luella"><img className="circleimage" src="images/luella.jpg" alt="Luella" /></Link>
                </li>
                <li className="nav-item">
                  <Link to="connor"><img className="circleimage" src="images/connor.jpg" alt="Connor" /></Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/matt">
              <Matt />
            </Route>
            <Route path="/kiley">
              <Kiley />
            </Route>
            <Route path="/luella">
              <Luella />
            </Route>
            <Route path="/connor">
              <Connor />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
