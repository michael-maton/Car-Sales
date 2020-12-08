import React from 'react';

const AddedFeature = props => {

  const handleClick = () => {
    props.handleRemoveFeature(props.feature);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
