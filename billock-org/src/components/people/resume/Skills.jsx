import React, { Component } from 'react'

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
      <li>
        {item['skill']} - {item['years']} years
      </li>
    ))
    return (
      <div>
        <h2>Skills</h2>
        <div>
          {skills_list}
        </div>
      </div>
    )
  }
}
