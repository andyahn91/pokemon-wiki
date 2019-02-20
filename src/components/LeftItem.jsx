import React from 'react';

const LeftItem = (props) => {
  return (
    <button
      type="button"
      className="btn mx-3 btn-outline-success"
      onClick={props.onClick}
    >
      &#8249;
    </button>
  );
};

export default LeftItem;
