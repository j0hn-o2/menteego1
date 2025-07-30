import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginmentoraccount.css';
import menteegologo from '../assets/image.png';

function LoginMentorAccount() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost/menteego_backend/auth/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Invalid login credentials');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('mentor', JSON.stringify(data.user));
      navigate('/dashboard/mentor');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="mentor-login-container">
      <div className="mentor-logo">
        <img src={menteegologo} alt="Mentor Logo" />
      </div>
      <h1 className="mentor-title">Login as Mentor</h1>

      <form onSubmit={handleSubmit} className="mentor-login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" id="email" name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" id="password" name="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Login'}
        </button>

        <p className="signup-link">
          Don't have an account? <Link to="/creatementoraccount">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginMentorAccount;
