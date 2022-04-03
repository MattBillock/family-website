import React, { Component } from 'react'
import { Collapse, Tab, Tabs } from 'react-bootstrap'
import PersonalInfo from './PersonalInfo'
import HobbyInfo from './HobbyInfo'
import Resume from './resume'
import '../../stylesheets/matt.sass'

export default class Matt extends Component {
  
  render() {
    return (
      <div className='matt-bg'>
        <div className="main-content">
          <div>
            <h1>Matt</h1>
            <Tabs defaultActiveKey="resume" id="matt-page-tabs" className='mb-3'>
              <Tab eventKey='personal' title='Personal info'>
                <PersonalInfo />
              </Tab>
              <Tab eventKey='music' title='Music'>
                <HobbyInfo />
              </Tab>
              <Tab eventKey='resume' title='Resume'>
                <Resume />
              </Tab>
            </Tabs>
            
          </div>
        </div>
      </div>
    )
  }
}
