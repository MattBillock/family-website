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
import Container from 'react-bootstrap/Container'


export default class FamilyNavBar extends Component {
  render() {
    return (
    <div className='navbar-position'>
        <Navbar fixed='top' expand='sm' >
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Container>
          <Nav className="m-auto">
              <Nav.Link href="/matt"><img className="circleimage" src="images/matt.jpg" alt="Matt" /></Nav.Link>
              <Nav.Link href="/kiley"><img className="circleimagerot" src="images/kiley.jpg" alt="Kiley" /></Nav.Link>
              <Nav.Link href="/luella"><img className="circleimage" src="images/luella.jpg" alt="Luella" /></Nav.Link>
              <Nav.Link href="/connor"><img className="circleimage" src="images/connor.jpg" alt="Connor" /></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
    </div>
    )
  }
}
