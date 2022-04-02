import React, { Component } from 'react'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import Education from './Education'
import OtherRelated from './OtherRelated'
import '../../../stylesheets/resume.sass'
import JsPDF from 'jspdf'

export default class Resume extends Component {
  generatePDF() {
    const report = new JsPDF('portrait','pt','a4')
    report.html(document.querySelector('#resume-content')).then( () => {
      report.save('matthew-raymond-billock-resume.pdf')
    })
  }
  render() {
    return (
      <div className='resume'>
        <button onClick={this.generatePDF} type='button'>Export PDF</button>
        <div id="resume-content">
          <h1>MATTHEW R. BILLOCK</h1>
          <Skills />
          <EmploymentHistory />
          <Education />
          <OtherRelated />
        </div>
      </div>
    )
  }
}
