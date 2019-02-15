import React, { Component } from 'react';
import Items from './components/Items.jsx';
import NavBar from './components/NavBar.jsx';
import Add from './components/Add.jsx';
require('./App.css');

class App extends Component {
  state = {
    pokemon: {
      image: '',
      name: '',
      description: '',
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBar id="navBar"/>
        <Items id="items"/>
        <Add />
      </div>
    );
  }
}

export default App;
