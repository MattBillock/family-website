import FamilyNavBar from './components/FamilyNavBar';
import { Component, default as React } from 'react';
import './App.css';
import './main.css';

export default class App extends Component {
  
  render() {
    window.onload = function() { document.body.classList.remove('is-preload'); }
    window.ontouchmove = function() { return false; }
    window.onorientationchange = function() { document.body.scrollTop = 0; }
  
    return (
      <div className="is-preload">
		    <div id="wrapper">
          <div id="bg"></div>
          <div id="overlay"></div>
          <div id="main">

            <header id="header">
              <h1>The Billock Family</h1>
              <span><em>Est. 2012</em></span>

              <div align='center'>
                <FamilyNavBar />
              </div>                
            </header>

            <footer id="footer">
              <span className="copyright">&copy; 2021 Sparrow Court Consulting</span>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}
