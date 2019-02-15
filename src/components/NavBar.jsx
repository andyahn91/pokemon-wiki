import React, { Component } from "react";

class NavBar extends Component {
  state = {
    search: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state.search)
  };

  handleChange = event => {
    let search = {...this.state.search};
    search = event.currentTarget.value;

    this.setState({ search });
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#">
          <img src="https://i.imgur.com/f3Y3Mvg.png" />
        </a>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input
            value={this.state.search}
            onChange={this.handleChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
