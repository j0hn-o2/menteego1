import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './loginmenteeaccount.css';
import menteegologo from '../assets/image.png';

function LoginMenteeAccount() {
  const [formData, setFormData] = useState({ email: '', password: '', role:'mentee'});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
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
      
      localStorage.setItem('first_name', data.user.first_name);

      localStorage.setItem('token', data.token);
      localStorage.setItem('mentee', JSON.stringify(data.user));
      navigate('/dashboard/mentee');
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-mentee-account">
      <div className="login-logo">
        <img src={menteegologo} alt="Mentee Logo" />
      </div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : 'Login'}
        </button>
      </form>

      <p className="signup-link">
        Don’t have an account? <Link to="/creatementeeaccount">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginMenteeAccount;
