import { Component, default as React } from 'react';

import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import Home from './components/Home'
import Matt from './components/people/Matt'
import Kiley from './components/people/Kiley'
import Luella from './components/people/Luella'
import Connor from './components/people/Connor'
import FamilyNavBar from './components/FamilyNavBar';
import './stylesheets/main.sass'
export default class App extends Component {
  
  render() {
  
    return (
      <div id="outer-container">
      <Router>
        <div className="App-container">
          <div id="main">
            <FamilyNavBar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/matt' element={<Matt />} />
              <Route path='/kiley' element={<Kiley />} />
              <Route path='/luella' element={<Luella />} />
              <Route path='/connor' element={<Connor />} />
            </Routes>
            <footer id="footer">
              <span className="copyright">&copy; 2021 Sparrow Court Consulting</span>
            </footer>
          </div>
        </div>
      </Router>
      </div>
    )
  }
}
