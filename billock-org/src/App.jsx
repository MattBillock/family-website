import BillockFamilyIntro from './components/BillockFamilyIntro';
import NavBar from './components/NavBar';
import { Component, default as React } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BillockFamilyIntro/>
      </div>
    )
  }
}
