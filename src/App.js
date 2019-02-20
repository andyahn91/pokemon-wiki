import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx";
import Add from "./components/Add.jsx";
import Items from "./components/Items.jsx";
import LeftItem from "./components/LeftItem.jsx";
import RightItem from "./components/RightItem.jsx";
import './App.css';

import axios from 'axios';

class App extends Component {
  state = {
    pokemons: [],
    current: 0,
    pokemon: {
      imageURL: "",
      name: "",
      description: ""
    }
  };

  // wait till the data from server to comeback, then setState with the response
  async componentDidMount() {
    let result;

    try {
      let response = await axios.get("http://localhost:3001/");
      result = response.data;
    } catch (error) {
      console.log(error);
    }

    this.setState({
      pokemons: [...result],
      pokemon: result[this.state.current]
    });
  }

  // show previous item
  handlePrevious = () => {
    const { current, pokemons } = this.state;

    // if current item is the first one, show the last item
    if (current === 0) {
      let lastIndex = pokemons.length - 1;

      this.setState({
        current: lastIndex,
        pokemon: pokemons[lastIndex],
      })
    } else {
      let newCurrent = current - 1;
      
      this.setState({
        current: newCurrent,
        pokemon: pokemons[newCurrent],
      })
    }
  };

  handleNext = () => {
    const { current, pokemons } = this.state;

    // if current item is the last item, show the first item
    if (current === pokemons.length - 1) {
      this.setState({
        current: 0,
        pokemon: pokemons[0]
      });
    } else {
      let newCurrent = current + 1;
      this.setState({
        current: (newCurrent),
        pokemon: pokemons[newCurrent]
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid p-3">
          <Add />
          <main className="d-flex justify-content-center align-items-center">
            <LeftItem onClick={this.handlePrevious} />
            <Items
              pokemon={this.state.pokemon}
              // onDelete={this.handleDelete}
            />
            <RightItem onClick={this.handleNext} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
