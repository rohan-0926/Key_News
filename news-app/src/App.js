// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class 
 extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <News pageSize={6}/>
      </div>
    )
  }
}
