import React from "react";
import { useNavigate } from "react-router-dom";
import USAMap from 'react-usa-map';

const BodyMap = () => {
  const customizeObj = {};
  const stateList = ['TX', 'GA', 'NC'];
  const filler = {
    fill: "rgb(60, 164, 255)",
    clickHandler: (event) => alert(event.target.dataset.name),
  };
  stateList.forEach((singleState) => {
    customizeObj[singleState] = {
      fill: "rgb(60, 164, 255)",
      clickHandler: (event) => {
        alert('You are checking: '+singleState);
        handleToDetail(singleState);
      },
    };
  });

  const mapHandler = (event) => {
    // alert(event.target.dataset.name);
  };

  const navigate = useNavigate();
  const handleToDetail = (stateName) => {
      navigate(`detail/${stateName}`);
  }

  return (
    <div>
      <USAMap onClick={mapHandler} customize={customizeObj} />
    </div>
  )
}

export default BodyMap;