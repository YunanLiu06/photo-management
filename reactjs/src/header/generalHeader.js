import React, { useState } from 'react';
import SideBanner from '../components/sideBanner/sideBanner';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import sideImage from '../resources/side2.png';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useSelector } from 'react-redux';

const Header = () => {
    const [showBanner, setShowBanner] = useState(false);
    const loginUser = useSelector(state => state.loginUser);
    const handleClick = () => {
        setShowBanner(true);
    }

    const onClose = () => {
        setShowBanner(false);
    }
    // return (
    //     <>
    //         {showBanner &&
    //             <SideBanner style={{ float: 'right', position: 'relative' }} onClose={onClose} />
    //         }
    //         <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
    //             <a class="navbar-brand" style={{ padding: '0px 0px 0px 15px' }} href="/photo-management">Photo Manager</a>
    //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span class="navbar-toggler-icon"></span>
    //             </button>
    //             <div class="collapse navbar-collapse" id="navbarNav">
    //                 <ul class="navbar-nav">
    //                     <li class="nav-item active">
    //                         <a class="nav-link" href="/photo-management">Home Map</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="/photo-management/cars">Cars</a>
    //                     </li>
    //                     <li class="nav-item">
    //                         <a class="nav-link" href="/photo-management/resume">About Me</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div style={{ position: 'fixed', right: 60, padding: 0, border: 'none' }}>
    //                 {loginUser?.email === null ? <LoginButton /> : <LogoutButton />}
    //             </div>
    //             {!showBanner && <button style={{ position: 'fixed', right: 0, padding: 0, border: 'none', marginRight: '15px' }} type="button" onClick={handleClick}>
    //                 <img src={sideImage} alt="Button Icon" style={{ width: '35px', height: '35px' }} />
    //             </button>}
    //         </nav>
    //     </>
    // )

    return (
        <>
            {showBanner &&
                <SideBanner style={{ float: 'right', position: 'relative' }} onClose={onClose} />
            }
            <header className="header" style={{ position: 'fixed', width: '100%' }}>
                <div className="left-group">
                    <div class="logo">Photo Manager</div>
                    <nav className="nav">
                        <a href="/photo-management">Home Map</a>
                        <a href="/photo-management/cars">Cars</a>
                        <a href="/photo-management/resume">About</a>
                    </nav>
                </div>
                <div style={{ position: 'fixed', right: 60, padding: 0, border: 'none' }}>
                    {loginUser?.email === null ? <LoginButton /> : <LogoutButton />}
                </div>
                {!showBanner && <button style={{ position: 'fixed', right: 0, padding: 0, border: 'none', marginRight: '15px' }} type="button" onClick={handleClick}>
                    <img src={sideImage} alt="Button Icon" style={{ width: '35px', height: '35px' }} />
                </button>}
            </header>
        </>
    );
};

export default Header;