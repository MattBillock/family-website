import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

export default class Skills extends Component {
  getData() {
    return [
      {
        'skill':'Ruby development',
        'years':11
      },
      {
        'skill':'Python development',
        'years':5
      },
      {
        'skill':'JavaScript development',
        'years':8
      },
      {
        'skill':'C++ development',
        'years':7
      },
      {
        'skill':'Agile methodologies',
        'years':15
      }
    ]
  }
  render() {
    var skills_list = this.getData().map((item => 
      <div key={uuidv4()}>
        <li >
          {item['skill']} - {item['years']} years
        </li>
      </div>
    ))
    return (
      <div>
        <h2>Skills</h2>
        <div >
          <ul>
          {skills_list}
          </ul>
        </div>
      </div>
    )
  }
}
