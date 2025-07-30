import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import menteegologo from '../assets/image.png';
import './creatementoraccount.css';

function CreateMentorAccount() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    role: 'mentor',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      setSuccess('');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost/menteego_backend/auth/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message || 'Failed to create account');
        setSuccess('');
      } else {
        setSuccess('Account created successfully!');
        setError('');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
          role: 'mentor',
        });

        setTimeout(() => {
          navigate('/loginmentor');
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      setSuccess('');
      setLoading(false);
    }
  };

  return (
    <div className="create-mentor-account">
      <div className="creatementoraccountlogo">
        <img src={menteegologo} alt="logo" />
      </div>

      <div className="create-mentor-content">
        <div className="create-mentor-header">
          <h1>Sign Up</h1>
          <p className="sub-text">Inspire and guide students through mentorship</p>
        </div>

        <form className="create-mentor-form" onSubmit={handleSubmit}>
          <div className="user-name">
            <div className="input-group">
              <label>First Name:</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="email-role">
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Role:</label>
              <input type="text" name="role" value={formData.role} disabled />
            </div>
          </div>

          <div className="password1">
            <div className="input-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <p className='privacy-policy'>
            By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
          </p>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <div className="create-button">
            <button type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>

          <div className="already-have-account">
            <p>
              Already have an account? <Link to="/loginmentor">Log in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateMentorAccount;

