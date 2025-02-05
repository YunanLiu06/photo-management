import React from "react";
import '../../body/style.css';
import { useNavigate } from "react-router-dom";

const PhotoDetail = (photoInfo) => {
  const navigate = useNavigate();
  const handleToDetail = () => {
      navigate('/photo-management');
  }
  return (
    <div className="Mainbody Detailpage">
      <div className="Bodytext">
        This is the Photo Show Room page.
      </div>
      <button className="Buttonstyle" onClick={handleToDetail} style={{}}>To Home</button>
    </div>)
}

export default PhotoDetail;