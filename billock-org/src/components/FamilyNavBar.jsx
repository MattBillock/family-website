import React, { Component, useState } from 'react'
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
import { slide as Menu } from 'react-burger-menu'


export default class FamilyNavBar extends Component {

  render() {
    return (
    <div className='navbar-position'>
        <Menu classNam>
            <a id="home" className="menu-item" href="/"><img className='circleimagerot' src={require('../images/tenor-horn.jpg')} /></a>
            <a href="/matt" className="menu-item"><img className="circleimage" src={require("../images/matt.jpg")} alt="Matt" /></a>
            <a href="/kiley" className="menu-item"><img className="circleimagerot" src={require("../images/kiley.jpg")} alt="Kiley" /></a>
            <a href="/luella" className="menu-item"><img className="circleimage" src={require("../images/luella.jpg")} alt="Luella" /></a>
            <a href="/connor" className="menu-item"><img className="circleimage" src={require("../images/connor.jpg")} alt="Connor" /></a> 
        </Menu>
    </div>
    )
  }
}
