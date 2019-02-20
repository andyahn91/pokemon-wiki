import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
  state = {
    newPokemon: {
      imageURL: '',
      name: '',
      description: ''
    },
    error:""
  };

  handleAdd = () => {
    axios.post("http://localhost:3001/add", {
      imageURL: this.state.newPokemon.imageURL,
      name: this.state.newPokemon.name,
      description: this.state.newPokemon.description,
    }).then((response) => {
      $("#exampleModalCenter").modal('hide');
    })
    .catch((error) => {
      if(error.response.data != null && error.response.data.message != null){
        this.setState({error:error.response.data.message});
      } else {
        this.setState({error:error.response.statusText});
      }
    });
  }

  handleChange = ({ currentTarget: input }) => {
    let newPokemon = {...this.state.newPokemon};
    newPokemon[input.name] = input.value
    this.setState({ newPokemon });
  }

  render() {
    return (
      <div className="text-right">

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add a new Pokémon!
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body d-flex align-items-center flex-column">
                <h5 className="text-danger text-center mb-auto">{this.state.error}</h5>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body bg-light">

                    <img
                      src={this.state.newPokemon.imageURL.length === 0 ? "https://static.thenounproject.com/png/22161-200.png" : this.state.newPokemon.imageURL}
                      className="card-img-top p-2"
                    />

                    <form className="card-title text-center">
                      <input
                        name="imageURL"
                        className="form-control mb-3"
                        type="text"
                        placeholder="Paste URL of an image"
                        value={this.state.newPokemon.imageURL}
                        onChange={this.handleChange}
                      />
                      <input
                        name="name"
                        className="form-control text-center font-weight-bold mb-1"
                        type="text"
                        placeholder="Pokémon Name"
                        value={this.state.newPokemon.name}
                        onChange={this.handleChange}
                      />
                      <textarea
                        name="description"
                        className="form-control mr-sm-2"
                        placeholder="Description"
                        rows="3"
                        value={this.state.newPokemon.description}
                        onChange={this.handleChange}
                      />
                    </form>

                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={this.handleAdd}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
