import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';
import {Bootstrap,Grid,Row,Col} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/> 
       <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <code>&lt; <Sidebar/> /&gt;</code>
            </Col>
            <Col xs={8} md={8}>
              <code>&lt; <Content/> /&gt;</code>
            </Col>
          </Row>
        </Grid>;
      </div>
    );
  }
}

export default App;