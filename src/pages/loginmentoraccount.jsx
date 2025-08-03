import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginmentoraccount.css';
import menteegologo from '../assets/image.png';

function LoginMentorAccount() {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'mentor' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      
      localStorage.setItem('first_name', data.user.first_name);
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
    <div className="login-mentor-account">
      <div className="login-logo">
        <img src={menteegologo} alt="Mentor Logo" />
      </div>

      <div className="login-content">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p className="sub-text">Continue inspiring and guiding students</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required 
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <div className="login-button">
            <button type="submit" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          <div className="signup-link">
            <p>
              Don't have an account? <Link to="/creatementoraccount">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginMentorAccount;
