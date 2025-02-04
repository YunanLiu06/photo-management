import React from "react";

const Footer = () => {
  return (
    <div style={{
      position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', height: '5%'
    }}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
        <p>
          This is the footer.
        </p>
      </div>
    </div>
  )
};

export default Footer;