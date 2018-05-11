import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import Image from './Image';
import Forms from './Forms';
import AjaxCall from './AjaxCall';
import ColorSlider from './ColorSlider';
import Event from './Event';
import Refs from './Refs';
import CRUD from './CRUD';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/> 
       <Sidebar/>
      {/* <Content/> */}
   
      </div>
    );
  }
}
export default App;