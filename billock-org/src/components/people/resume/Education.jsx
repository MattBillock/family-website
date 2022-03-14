import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'


export default class Education extends Component {
  getData() {
    return ([
      {
        'school': 'DePaul University',
        'degree': 'Master of Science',
        'major': 'Computer Graphics and Animation (developer concentration)',
        'graduationDate': '06/2007',
        'city': 'Chicago, IL',
        'notes': 'Graduated with distinction'
      },
      {
        'school': 'Iowa State University',
        'degree': 'Bachelor of Science',
        'major': 'Computer Science',
        'graduationDate': '12/2003',
        'city': 'Ames, IA',
        'notes': ''
      }
    ]);
  }
  render() {
    var education_list = this.getData().map( (item) => 
      <li key={uuidv4()}>
        <div>
          <div><span className="degree">{item['degree']}</span> - <span className="major">{item['major']}</span></div>
          <div><span className='school'>{item['school']}</span>, <span className='city'>{item['city']}</span></div>
          <div><span className='notes'>{item['notes']}</span></div>
        </div>
      </li>
    );
    return (
      <div>
        <h2>Education</h2>
        <ul> { education_list } </ul>
      </div>
    )
  }
}
