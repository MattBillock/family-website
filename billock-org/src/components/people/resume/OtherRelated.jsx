import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
export default class OtherRelated extends Component {
  getData() {
    return [
      {
        "data": "Chicago Brass Band",
        "children": [
          "First Tenor Horn, 2019-Present"
        ]
      },
      {
        "data": "Kilties Drum and Bugle Corps",
        "children": [
          "Program Coordinator, 2019",
          "Visual Caption Head, 2018",
          "Visual Tech, 2009, 2011-2012",
          "Mellophone, 2014",
          "Baritone, 2007-2009",
        ]
      },
      {
        "data": "Illinois Brass Band",
        "children": [
          "Tenor horn, 2009-2011, 2014, 2017-2018",
          "2nd Baritone, 2010",
          "2nd Cornet, 2013",
          "Board member at large, 2010"
        ]
      },
      {
        "data": "DeVry University, Visiting Professor 2011-2018",
        "children": [
          "Taught Computer Grpahics Programming 1 and 2, Math Programming for Games, and Introduction to Game and Simulation Programming"
        ]
      },
      {
        "data": "Southern New Hampshire University, Adjunct Faculty 2012-2017",
        "children": [
          "Taught Introduction to Software Development and Interactive 3D Virtual Environments"
        ]
      },
      {
        "data": "Rasmussen College, Adjunct Faculty, Subject Matter Expert 2012-2015",
        "children": [
          "Taught Game Design Theory 1 and 2, and DirectX Lighting",
          "Designed multiple courses in computer graphics development"
        ]
      },
      {
        "data": "IGDA Scholarship Recipient",
        "children": [
        ]
      },
      {
        "data": "Upsilon Pi Epsilon Computer Science Honor Society",
        "children": [
        ]
      },
    ]
  }
  render() {
    const item_list = this.getData().map((item) => 
      <li key={uuidv4()}>
        {item['data']}
        <ul>
          {item['children'].map((child) => <li key={uuidv4()}>{child}</li>)}
        </ul>
      </li>
    )
    return (
      <div>
        <h2>Other organizations and employment</h2>
        <ul>
          {item_list}
        </ul>
      </div>
    )
  }
}
