import React, { Component } from 'react'

const WELCOME_STRING = "Welcome to the Billock Family homepage!";

export default class BillockFamilyIntro extends Component {
  render() {
    return (
      <div>
        "{WELCOME_STRING}"
      </div>
    );
  }
}
