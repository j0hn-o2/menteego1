import React from 'react';
import './selectlogintype.css';
import { useNavigate } from 'react-router-dom';
import menteegologo from '../assets/image.png'

function SelectLoginType() {
    const navigate = useNavigate();
    const handleMentorLogin = () => {
        navigate('/loginmentor');
    };
    const handleMenteeLogin = () => {
        navigate('/loginmentee');
    };
  return (
    <div className="select-login-type">
      <div className="login-logo">
        <img src={menteegologo} alt="logo" />
      </div>

      <div className="select-login-content">
        <h1>Log In</h1>
        <div className="login-options">
        <button onClick={handleMentorLogin} className="mentor-login">Mentor</button>
        <button onClick={handleMenteeLogin} className="mentee-login">Mentee</button>
      </div>

      </div>
      
      
    </div>
  );
}

export default SelectLoginType;

