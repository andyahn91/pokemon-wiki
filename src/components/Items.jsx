import React, { Component } from "react";

// const Items = (props) => {
//   return (
//     <div className="card" style={{ width: "18rem" }}>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//           className="card-img-top p-2 "
//         />
//         <div className="card-body bg-light">
//           <h5 className="card-title text-center">{props.name}</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <div className="text-right">
//             <button
//               type="button"
//               onMouseEnter={() => "btn btn-danger"}
//               className="btn btn-outline-danger"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// }

class Items extends Component {
  constructor(props){
    super(props);
    this.name = props.pokemon.name
  }

  componentDidMount(){
    console.log('Item componentDidMount!');
  }

  render() {
    console.log('Items Component Rendered!');

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          className="card-img-top p-2 "
        />
        <div className="card-body bg-light">
          <h5 className="card-title text-center">{this.name === undefined ? 'Loading' : this.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="text-right">
            <button
              type="button"
              onMouseEnter={() => "btn btn-info"}
              className="btn btn-outline-info"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
