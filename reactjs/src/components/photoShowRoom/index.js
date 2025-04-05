import React, { useState } from "react";
import '../../body/style.css';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PhotoGallery from "./photoGallery";
import UploadBanner from "../uploader";

const PhotoDetail = (photoInfo) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/photo-management');
  }
  const { stateName } = useParams(); //get current state name
  const stateList = useSelector(state => state.stateInfo);
  const loginUser = useSelector(state => state.loginUser);
  const photoList = []; //all the photo name under current state
  if (stateList[stateName]) {
    stateList[stateName].forEach(value => {
      photoList.push(value);
    });
  }

  const [showUpload, setShowUpload] = useState(false);
  const handleSubmit = () => {
    setShowUpload(true);
  }

  return (
    <div className="Mainbody Detailpage">
      <div style={{ position: 'fixed', zIndex: 10 }}>
        {showUpload && <UploadBanner stateName={stateName} onClose={() => setShowUpload(false)} />}
      </div>
      <div className="Bodytext">
        <p>Welcome to Photo Showroom. The state you are viewing is: {stateName}</p>
        <PhotoGallery imgSrc={photoList} />
        <div style={{ padding: '10px' }}>
          <button type="button" class="btn btn-secondary" onClick={handleBack}>Back Home</button>
          {loginUser?.email === 'liu4807@gmail.com' && <button type="button" class="btn btn-secondary" onClick={handleSubmit}>Upload Photo</button>}
        </div>
      </div>
    </div>)
}

export default PhotoDetail;