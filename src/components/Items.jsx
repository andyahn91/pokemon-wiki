import React, { Component } from "react";

class Items extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          className="card-img-top p-2 "
        />
        <div className="card-body bg-light">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-right">
            <button
              type="button"
              onMouseEnter={() => "btn btn-danger"}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
