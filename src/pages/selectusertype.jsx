import React from "react";
import './selectusertype.css'; // Assuming you have a CSS file for styling
// import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function SelectUserType() {
    const navigate = useNavigate();
    const handleMenteeSelection = () => {
        navigate('/creatementeeaccount');
    };
    const handleMentorSelection = () => {
        navigate('/creatementoraccount');
    };
  return (
    <div className="select-user-type">
      <h2>Select User Type</h2>
      <div className="user-type-options">
        <button onClick={handleMentorSelection} className="user-type-button">Mentor</button>
        <button onClick={handleMenteeSelection} 
        className="user-type-button">Mentee</button>
      </div>
    </div>
  );
}
export default SelectUserType;