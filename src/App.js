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

  async componentDidMount(){
    console.log('App componentDidMount!');
    let data = await fetch('http://localhost:3001/')
    let result = await data.json();

    this.setState({
      pokemons: [...result],
      pokemon: result[this.state.current]
    })
      // .then(res => res.json())
      // .then(res => {
      //   this.setState({
      //     pokemons : [...res]
      //   });
      //   console.log('sfdsfdsfsddsf', this.state.pokemons[this.state.current])
      //   console.log('App this.state.pokemon', this.state.pokemon);
      // })
      // .catch(err => console.log(err));
      // this.setState({
      //   pokemon : this.state.pokemons[this.state.current]
      // })
      // console.log(data.json())
      // console.log(data)
  }

  handleNext = () => {
    console.log('current', this.state.current)
    let newCurrent = this.state.current + 1;

    if (this.state.current >= this.state.pokemons.length - 1) {
      this.setState({
        current: 0,
        pokemon: this.state.pokemons[0]
      })
    }else {
      this.setState({
        current: this.state.current += 1,
        pokemon: this.state.pokemons[newCurrent]
      })

    }

    
  }

  render() {
    console.log('App Component Rendered!');
    return (
      <div className="container-fluid h-100">
        <NavBar id="navBar"/>
        <Add />
        <div class="row justify-content-center h-100">
          <div class="col-sm">
          </div>
          <div class="col-sm">
            <Items id="items" pokemon={this.state.pokemon} onNext={this.handleNext}/>
          </div>
          <div class="col-sm col3 vcenter">
            <button
              type="button"
              className="btn btn-outline-info"
            >
              Neeeext
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
