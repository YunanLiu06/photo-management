import React from "react";
import './style.css';

const SideBanner = ({onClose}) => {

  const closeBanner = () => {
    let banner = document.getElementById("sideBanner");
    banner.classList.add("slide-out");

    setTimeout(() => {
      banner.style.display="none";
      onClose();
    }, 300)

  }
  return (
    <>
    <div className="side-banner" id="sideBanner">
      <p style={{color:"black", opacity:1}}>This is the side banner</p>
      <button onClick={closeBanner}>Close</button>
    </div>
      </>
  )
};

export default SideBanner;