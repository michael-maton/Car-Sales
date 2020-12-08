import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { connect } from "react-redux";

import { addPart, removePart } from "./actions";

const App = (props) => {
  const state = {
    // additionalPrice: 0,
    // car: {
    //   price: 26395,
    //   name: '2019 Ford Mustang',
    //   image:
    //     'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    //   features: []
    // },
  };

  const handleAddFeature = (feature) => {
    props.addPart(feature);
  };
  const handleRemoveFeature = (feature) => {
    props.removePart(feature);
  };
  console.log(props.car.features);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} handleRemoveFeature={handleRemoveFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} handleAddFeature={handleAddFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
};
export default connect(mapStateToProps, { addPart, removePart })(App);
