import React, { Component } from "react";
import Items from "./components/Items.jsx";
import NavBar from "./components/NavBar.jsx";
import Add from "./components/Add.jsx";
import LeftItem from "./components/LeftItem.jsx";
import RightItem from "./components/RightItem.jsx";
require("./App.css");

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

  //
  async componentDidMount() {
    let data = await fetch("http://localhost:3001/");
    let result = await data.json();

    this.setState({
      pokemons: [...result],
      pokemon: result[this.state.current]
    });
  }

  handlePrevious = () => {
    let newCurrent = this.state.current + 1;

    if (this.state.current <= this.state.pokemons.length - 1) {
      this.setState({
        current: 0,
        pokemon: this.state.pokemons[0]
      });
    } else {
      this.setState({
        current: (this.state.current += 1),
        pokemon: this.state.pokemons[newCurrent]
      });
    }
  };

  handleNext = () => {
    let newCurrent = this.state.current + 1;

    if (this.state.current >= this.state.pokemons.length - 1) {
      this.setState({
        current: 0,
        pokemon: this.state.pokemons[0]
      });
    } else {
      this.setState({
        current: (this.state.current += 1),
        pokemon: this.state.pokemons[newCurrent]
      });
    }
  };

  handleDelete = () => {

  }

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
              onNext={this.handleNext}
              onDelete={this.handleDelete}
            />
            <RightItem onClick={this.handleNext} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
