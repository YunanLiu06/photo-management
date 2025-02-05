import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
const MainBody = () => {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate('detail');
    }
    return (
        <div className="Mainbody" >
            <div className="Bodytext">
                This is the main page body of the app.
            </div>
            <button className="Buttonstyle" onClick={handleToDetail} style={{}}>To Detail</button>
        </div>)
};
export default MainBody;