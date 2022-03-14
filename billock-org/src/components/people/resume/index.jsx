import React, { Component } from 'react'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import Education from './Education'
import OtherRelated from './OtherRelated'
import '../../../stylesheets/resume.sass'

export default class Resume extends Component {
  render() {
    return (
      <div className='resume'>
        <h1>MATTHEW R. BILLOCK</h1>
        <Skills />
        <EmploymentHistory />
        <Education />
        <OtherRelated />
      </div>
    )
  }
}
