import React, { Component } from "react";

const Items = (props) => {
  const { imageURL, name, description} = props.pokemon;
  const questinoMark = 'https://static.thenounproject.com/png/22161-200.png'
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={imageURL === undefined ? questinoMark : imageURL}
        className="card-img-top p-2 "
      />
      <div className="card-body bg-light">
        <h5 className="card-title text-center">{name === undefined ? 'Loading...' : name}</h5>
        <p className="card-text">{description === undefined ? 'Loading...' : description}</p>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={props.onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// class Items extends Component {
//   constructor(props){
//     super(props);
//   }

//   componentDidMount(){
//     console.log('Item componentDidMount!');
//   }

//   render() {
//     console.log('Items Component Rendered!');
//     console.log('this.props.pokemon', this.props.pokemon)

//     return (
//       <div className="card" style={{ width: "18rem" }}>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
//           className="card-img-top p-2 "
//         />
//         <div className="card-body bg-light">
//           <h5 className="card-title text-center">{this.props.pokemon === undefined ? 'Loading...' : this.props.pokemon.name}</h5>
//           <p className="card-text">
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </p>
//           <div className="text-right">
//             <button
//               type="button"
//               onMouseEnter={() => "btn btn-info"}
//               className="btn btn-outline-info"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Items;
