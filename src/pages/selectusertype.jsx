import React from "react";
import './selectusertype.css'; // Assuming you have a CSS file for styling
import { Link,useNavigate  } from "react-router-dom";
import menteegologo from '../assets/image.png'; // Adjust the path as necessary


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

      <div className="select-user-type-logo">
        <img src={menteegologo} alt="MenteeGo Logo" />
      </div>
      
      <div className="select-user-type-content">

        <h1>Create Account</h1>

        <div className="user-type-options">
          <button onClick={handleMentorSelection} className="user-type-button">Mentor</button>
          <button onClick={handleMenteeSelection} className="user-type-button">Mentee</button>
        </div>

      </div>
      
    
    </div>

  );
}
export default SelectUserType;