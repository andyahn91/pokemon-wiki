import React, { Component } from 'react';

class Items extends Component {
  render() { 
    return (
      <div className="card" style={{width: '18rem'}}>
        <img src="https://www.w3schools.com/w3css/img_lights.jpg" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="text-right">
          <button type="button" onMouseEnter={"btn btn-danger"} className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;