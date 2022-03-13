
import React, { Component } from 'react'
import FamilyNavBar from './FamilyNavBar';
import './Home.css';
import '../main.css';

export default class Home extends Component {
  render() {
    return (
      <div className='bg'>
        <div className="is-preload">
          <div id="main">

            <header id="header">
              <div align='center'>
                <FamilyNavBar />
              </div>
            </header>

            </div>
        </div>
      </div>
    )
  }
}
