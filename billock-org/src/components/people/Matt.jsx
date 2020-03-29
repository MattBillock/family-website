import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import HobbyInfo from './HobbyInfo'
import Resume from './Resume'

export default class Matt extends Component {
  render() {
    return (
      <div>
        <a href="#" onClick={() => {this.hidden = !(this.hidden)}}> Show </a>
        <PersonalInfo />
        <HobbyInfo />
        <Resume />
      </div>
    )
  }
}
