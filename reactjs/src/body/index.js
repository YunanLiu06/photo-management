import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import BodyMap from "./body";
const MainBody = () => {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate('detail');
    }
    return (
        <div className="Mainbody" >
            <div className="Bodytext">
                Here are the places you visited.
                <BodyMap />
            </div>
            {/* <button className="Buttonstyle" onClick={handleToDetail} style={{}}>To Detail</button> */}
        </div>)
};
export default MainBody;