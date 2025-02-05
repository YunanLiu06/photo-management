import React, { useState } from 'react';
import SideBanner from '../components/sideBanner/sideBanner';

const Header = () => {
    const [showBanner, setShowBanner] = useState(false);
    const handleClick = () => {
        console.log('clicked');
        setShowBanner(true);
    }

    const onClose = () => {
        setShowBanner(false);
    }
    return (
        <>
            <div class="container" style={{ position: 'fixed', backgroundColor: 'white', width: '100%' }}>
                <div class="jumbotron">
                    <h1>This is a header</h1>
                    <p>This is the test header for this specific project.</p>
                </div>
                <button style={{ float: 'right' }} onClick={handleClick}> Click Me </button>
            </div>
            {showBanner && (<SideBanner onClose={onClose} />)}
        </>
    )
};

export default Header;