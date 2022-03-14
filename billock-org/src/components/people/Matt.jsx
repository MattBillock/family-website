import React, { Component } from 'react'
import { Collapse } from 'react-bootstrap'
import FamilyNavBar from '../FamilyNavBar'
import PersonalInfo from './PersonalInfo'
import HobbyInfo from './HobbyInfo'
import Resume from './resume'

export default class Matt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personalInfoOpen:false,
      hobbyInfoOpen: false,
      resumeInfoOpen: false
    }
  }
  setOpen(value, open) {
    switch(value) {
      case 'resume':
        this.setState({resumeInfoOpen: open})
        break;
      case 'hobby':
        this.setState({hobbyInfoOpen: open})
        break;
      case 'personal':
        this.setState({personalInfoOpen: open})
        break;
    }
  }
  render() {
    var personalInfoOpen = this.state.personalInfoOpen
    var hobbyInfoOpen = this.state.hobbyInfoOpen
    var resumeInfoOpen = this.state.resumeInfoOpen
    return (
      <div>
        <FamilyNavBar />
        <div className="main-content">
          <div>
            <h1>Matt</h1>
            <button aria-controls='collapse-personal'
              onClick={() => this.setOpen('personal', !personalInfoOpen)}>Personal Info</button>
            <Collapse in={personalInfoOpen}>
              <div id='collapse-personal'>
                <PersonalInfo />
              </div>
            </Collapse>
            <br />
            <button aria-controls='collapse-hobby'
              onClick={() => this.setOpen('hobby', !hobbyInfoOpen)}>Hobbies</button>
            <Collapse in={hobbyInfoOpen}>
              <div id='collapse-hobby'>
                <HobbyInfo />
              </div>
            </Collapse>
            <br />
            <button aria-controls='collapse-resume'
              onClick={() => this.setOpen('resume', !resumeInfoOpen)}>My resume</button>
            <Collapse in={resumeInfoOpen}>
              <div id='collapse-resume'>
                <Resume />
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    )
  }
}
