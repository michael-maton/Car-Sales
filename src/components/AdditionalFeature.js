import React from "react";
import { addPart } from "./../actions/index";

const AdditionalFeature = (props) => {

  const handleNew = () => {
    console.log(props.feature);
    props.handleClick(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleNew} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
