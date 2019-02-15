import React, { Component } from 'react';
import Items from './components/Items.jsx';
import NavBar from './components/NavBar.jsx';
import Add from './components/Add.jsx';
require('./App.css');

class App extends Component {
  state = {
    pokemons: [],
    current: 0,
    pokemon: {
      imageURL: '',
      name: '',
      description: '',
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(res => this.state.pokemons = [...res])
      .catch(err => console.log(err));

    this.setState({ pokemon : this.state.pokemons[this.state.current] });
  }

  render() {
    return (
      <div className="container">
        <NavBar id="navBar"/>
        <Items id="items" pokemon={this.state.pokemon}/>
        <Add />
      </div>
    );
  }
}

export default App;
