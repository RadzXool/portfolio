import React, { Component } from 'react';
import SkillList from './skills';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return (
        <div style={{ maxHeight: 300}}>
        <SkillList />
        </div>
        );

  }
}

export default App;
