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
    console.log('App componentDidMount!');
    fetch('http://localhost:3001/')
      .then(res => res.json())
      .then(res => this.setState({
        pokemons : [...res],
        pokemon : pokemons[current],
      }))
      .catch(err => console.log(err));

    console.log(this.state.pokemon)
  }

  render() {
    console.log('App Component Rendered!');

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
