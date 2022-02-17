import React, { Component } from 'react';

const WELCOME_STRING = 'Welcome to the Billock Family homepage!';

export default class BillockFamilyIntro extends Component {
  
  onClick = (name) => {
    document.getElementById(name).setAttribute("visible","false");
  }

  render() {
    return (
      <div>
        <strong>THIS PAGE IS UNDER HEAVY CONSTRUCTION. Please pardon our mess.</strong>
        <p>
          {WELCOME_STRING}
        </p>
        <p>
          Choose your family member below:
        </p>
        
      </div>
    );
  }
}
