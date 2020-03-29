import React, { Component } from 'react'
import PersonalInfo from 'components/people/PersonalInfo'
import HobbyInfo from 'components/people/HobbyInfo'
import Resume from 'components/people/Resume'

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
