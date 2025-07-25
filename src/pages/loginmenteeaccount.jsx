import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginmenteeaccount.css';
import menteegologo from '../assets/image.png';

function LoginMenteeAccount() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/mentees/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Invalid login credentials');
        return;
      }

      // Optionally save token/session
      localStorage.setItem('token', data.token); // if your backend returns a token
      localStorage.setItem('mentee', JSON.stringify(data.user)); // store user info

      // Navigate to dashboard or home page
      navigate('/mentee-dashboard');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-mentee-account">
      <div className="login-logo">
        {/* <img src={menteegologo} alt="Mentee Logo" /> */}
      </div>
      <h1>Login to Your Mentee Account</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginMenteeAccount;
