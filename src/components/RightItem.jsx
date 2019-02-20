import React from 'react';

const RightItem = (props) => {
  return (
    <button
      type="button"
      className="btn mx-3 btn-outline-success"
      onClick={props.onClick}
    >
      &#8250;
    </button>
  );
};

export default RightItem;
