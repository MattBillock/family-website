import { Component, default as React } from 'react';

import './App.css';
import './main.css';
import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from './components/Home'
import Matt from './components/people/Matt'
import Kiley from './components/people/Kiley'
import Luella from './components/people/Luella'
import Connor from './components/people/Connor'
export default class App extends Component {
  
  render() {
    window.onload = function() { document.body.classList.remove('is-preload'); }
    window.ontouchmove = function() { return false; }
    window.onorientationchange = function() { document.body.scrollTop = 0; }
  
    return (
      <Router>
        <div className="App">
          <div className="is-preload">
            <div id="wrapper">
              <div id="bg"></div>
              <div id="overlay"></div>
              <div id="main">
                <header id="header">
                    <div>
                      <h1>The Billock Family</h1>
                      <span><em>Est. 2012</em></span>
                    </div>
                </header>
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/matt' element={<Matt />} />
                  <Route path='/kiley' element={<Kiley />} />
                  <Route path='/connor' element={<Connor />} />
                  <Route path='/ella' element={<Luella />} />
                </Routes>
                <footer id="footer">
                  <span className="copyright">&copy; 2021 Sparrow Court Consulting</span>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
