import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (

      
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="https://www.billock.org/#home">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.billock.org/#matt">Matt</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.billock.org/#kiley">Kiley</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.billock.org/#luella">Luella</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.billock.org/#connor">Connor</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="https://www.billock.org/#house">HJouse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
