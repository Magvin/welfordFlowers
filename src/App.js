import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Billboard from './Components/Billboard';
import ThreeImages from './Components/Billboard/threeImg'
import Favorites from './Components/favorites';
import Footer from './Components/Header/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Billboard />
        <ThreeImages />
        <Favorites />
        <Footer />
      </div>
    );
  }
}

export default App;
