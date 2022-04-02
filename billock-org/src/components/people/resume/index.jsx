import React, { Component } from 'react'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import Education from './Education'
import OtherRelated from './OtherRelated'
import '../../../stylesheets/resume.sass'
import jsPDF from 'jspdf'

export default class Resume extends Component {
  generatePDF() {
    var report = new jsPDF('p', 'pt', 'letter')
    var source = window.document.getElementById("resume-content")
    report.html(source, {
      callback: function (doc) {
        doc.save('matthew-raymond-billock-resume.pdf');
      },
      x: 10,
      y: 10,
      width: 522,
      margin: [80,0,60,40]
   });
  }

  render() {
    return (
      <div className='resume'>
        <button onClick={this.generatePDF} type='button'>Export PDF</button>
        <div id="resume-content">
          <h1>Matthew R Billock</h1>
          <Skills />
          <EmploymentHistory />
          <Education />
          <OtherRelated />
        </div>
      </div>
    )
  }
}
