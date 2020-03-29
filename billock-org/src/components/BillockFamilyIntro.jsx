import React, { Component } from 'react';
import Matt from './people/Matt'

const WELCOME_STRING = 'Welcome to the Billock Family homepage!';

export default class BillockFamilyIntro extends Component {
  
  onClick = (name) => {
    document.getElementById(name).setAttribute("visible","false");
  }

  render() {
    return (
      <div>
        <error>THIS PAGE IS UNDER HEAVY CONSTRUCTION. Please pardon our mess.</error>
        <p>
          {WELCOME_STRING}
        </p>
        <p>
          Choose your family member below:
        </p>
        <div>
          <span id="Matt">
            <Matt />
          </span>
          <br />
          <span id="Kiley">
            Coming soon!
          </span>
          <br />
          <span id="Luella">
            Coming soon!
          </span>
          <br />
          <span id="Connor">
            Coming soon!
          </span>
          <br />
        </div>
      </div>
    );
  }
}
