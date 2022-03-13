import React, { Component } from 'react'
import FamilyNavBar from '../FamilyNavBar'
import PersonalInfo from './PersonalInfo'
import HobbyInfo from './HobbyInfo'
import Resume from './resume'

export default class Matt extends Component {
  render() {
    return (
      <div>
        <h1>MATT</h1>
        <FamilyNavBar />
        <PersonalInfo />
        <HobbyInfo />
        <Resume />
      </div>
    )
  }
}
