import React from "react";
import { useNavigate } from "react-router-dom";
import USAMap from 'react-usa-map';
import { useSelector } from "react-redux";

const BodyMap = () => {
  const customizeObj = {};

  const statesInfo = useSelector(state => state.stateInfo)
  const stateList = [];
  Object.keys(statesInfo).forEach(key => {
    stateList.push(key);
  });

  stateList.forEach((singleState) => {
    customizeObj[singleState] = {
      fill: "rgb(255, 213, 0)",
      clickHandler: (event) => {
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
    <>
      <div>
        <USAMap onClick={mapHandler} customize={customizeObj} />
      </div>
    </>
  )
}

export default BodyMap;