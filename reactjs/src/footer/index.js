import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div style={{
      position: 'fixed', bottom: 0, width: '100%', backgroundColor: 'white', height: '5%'
    }}>
      <div class='container'>
        <footer class="d-flex flex-wrap justify-content-between align-items-center border-top" style={{ padding: 0, marginTop: '0.7rem' }}>
          <div class="col-md-4 d-flex align-items-center">
            <span class="mb-md-0 text-body-secondary">Welcome to Photo Manager</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-2"><a href="https://www.youtube.com/@louislew5545"><FontAwesomeIcon class="icon-cog blackiconcolor" icon={faYoutube} style={{ width: '25px', height: '25px', marginTop: '3px', color:'red' }} /></a></li>
            <li class="ms-2"><a href="https://www.instagram.com/luyul_06/"><FontAwesomeIcon icon={faInstagram} style={{ width: '25px', height: '25px', marginTop: '3px' }} /></a></li>
          </ul>
        </footer>
      </div>
    </div>
  )
};

export default Footer;