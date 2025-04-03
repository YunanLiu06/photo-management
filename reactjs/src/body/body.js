import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import USAMap from 'react-usa-map';
import { useSelector } from "react-redux";
import UploadBanner from "../components/uploader";

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
    if (!stateList.includes(event.target.dataset.name)) {
      setShowUpload(true);
      SetSelected(event.target.dataset.name);
    }
  };

  const navigate = useNavigate();
  const handleToDetail = (stateName) => {
    navigate(`detail/${stateName}`);
  }

  const [showUpload, setShowUpload] = useState(false);
  const [selected, SetSelected] = useState('');

  return (
    <>
    <div style={{position:'fixed', zIndex:10}}>
      {showUpload && <UploadBanner stateName={selected} onClose={() => setShowUpload(false)} />}
    </div>
      <div className="flex flex-col items-center justify-center h-screen relative" >
        <USAMap onClick={mapHandler} customize={customizeObj} />
      </div>
    </>
  )
}

export default BodyMap;