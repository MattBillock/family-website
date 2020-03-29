import React, { Component } from 'react'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import Education from './Education'
import OtherRelated from './OtherRelated'

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h1>MATTHEW R. BILLOCK</h1>
        <Skills />
        <EmploymentHistory />
        <Education />
        <OtherRelated />
      </div>
    )
  }
}
