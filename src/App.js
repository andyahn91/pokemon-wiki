import React, { Component } from 'react';
import Items from './components/Items.jsx';
import NavBar from './components/NavBar.jsx';
require('./App.css');

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavBar id="navBar"/>
        <Items id="items"/>
      </div>
    );
  }
}

export default App;
