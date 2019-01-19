import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Billboard from './Components/Billboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Billboard />
      </div>
    );
  }
}

export default App;
