import React from "react";
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

const SideBanner = ({ onClose }) => {

  const closeBanner = () => {
    let banner = document.getElementById("sideBanner");
    banner.classList.add("slide-out");

    setTimeout(() => {
      banner.style.display = "none";
      onClose();
    }, 300)

  }
  return (
    <>
      <div className="side-banner" id="sideBanner" style={{position:'fixed'}}>
        <p style={{ color: "black", opacity: 1, padding:'5px 15px 5px 15px' }}>Menu
        <button onClick={closeBanner} style={{position:'absolute', right: 5}}>Close</button></p>
      </div>
    </>
  )
};

export default SideBanner;