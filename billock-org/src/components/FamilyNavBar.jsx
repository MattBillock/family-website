import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'


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

export default class FamilyNavBar extends Component {
  render() {
    return (
    <div>
      <Router>
        <Navbar>
          <Nav className="m-auto">
            <NavItem to="/matt">
              <NavLink to="/matt"><img className="circleimage" src="images/matt.jpg" alt="Matt" /></NavLink>
            </NavItem> 
            <NavItem to="/kiley">
              <NavLink to="/kiley"><img className="circleimagerot" src="images/kiley.jpg" alt="Kiley" /></NavLink>
            </NavItem> 
            <NavItem to="/luella">
              <NavLink to="/kiley"><img className="circleimage" src="images/luella.jpg" alt="Luella" /></NavLink>
            </NavItem> 
            <NavItem to="/connor">
              <NavLink to="/connor"><img className="circleimage" src="images/connor.jpg" alt="Connor" /></NavLink>
            </NavItem> 
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element="<App />" />
          <Route path="/matt" element="<Matt />" />
          <Route path="/kiley" element="<Kiley />" />
          <Route path="/luella" element="<Luella />" />
          <Route path="/connor" elemen="<Connor />" />
        </Routes>
      </Router>
    </div>
    )
  }
}
