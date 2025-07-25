import React from 'react';
import './selectlogintype.css';
import { useNavigate } from 'react-router-dom';

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
      <h1>Select Login Type</h1>
      <div className="login-options">
        <button onClick={handleMentorLogin} className="mentor-login">Mentor</button>
        <button onClick={handleMenteeLogin} className="mentee-login">Mentee</button>
      </div>
    </div>
  );
}

export default SelectLoginType;

