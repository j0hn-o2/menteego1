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
                <img src={menteegologo} alt="MenteeGo Logo" />
            </div>

            <div className="select-login-content">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p className="sub-text">Choose how you'd like to sign in</p>
                </div>

                <div className="login-options">
                    <div className="login-option" onClick={handleMentorLogin}>
                        <div className="option-icon">👨‍🏫</div>
                        <h3>Mentor</h3>
                        <p>I'm here to guide and inspire students</p>
                        <button className="option-button">Sign In as Mentor</button>
                    </div>
                    
                    <div className="login-option" onClick={handleMenteeLogin}>
                        <div className="option-icon">🎓</div>
                        <h3>Mentee</h3>
                        <p>I'm looking for guidance and mentorship</p>
                        <button className="option-button">Sign In as Mentee</button>
                    </div>
                </div>

                <div className="back-to-home">
                    <p>
                        Don't have an account? <a href="/selectusertype">Create one here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SelectLoginType;

