import React from 'react';

const Items = (props) => {
  const { imageURL, name, description } = props.pokemon;
  const questionMark = 'https://static.thenounproject.com/png/22161-200.png';

  /**
   * Returns its argument. If nothing is passed as an argument, it returns a string 'Loading...'
   * @param {string} variable
   */
  const load = (variable) => {
    return variable === undefined ? 'Loading...' : variable;
  };

  return (
    <div className="card mx-3" style={{ width: '18rem', height: '34rem' }}>
      <img
        src={imageURL === undefined ? questionMark : imageURL}
        className="card-img-top p-2"
        alt=""
      />
      <div className="card-body bg-light">
        <h5 className="card-title text-center">{load(name)}</h5>
        <p className="card-text overflow-auto">{load(description)}</p>
        {/* <div className="text-right">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Items;
