import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import HobbyInfo from './HobbyInfo'
import Resume from './resume'

export default class Matt extends Component {
  render() {
    return (
      <div>
        <PersonalInfo />
        <HobbyInfo />
        <Resume />
      </div>
    )
  }
}
