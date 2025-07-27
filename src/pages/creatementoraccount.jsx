import React, { useState } from 'react';
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

    try {
      const response = await fetch('http://localhost:5000/api/mentees', {
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

      if (!response.ok) {
        setError(data.message || 'Failed to create account');
        setSuccess('');
      } else {
        setSuccess('Account created successfully!');
        setError('');
        // Optionally reset form
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: '',
          role: 'mentee',
        });
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      setSuccess('');
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
        </div>

        <form className="create-mentor-form" onSubmit={handleSubmit}>
          <div className="user-name">
            <div>
              <label className='first-name'>First Name:</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className='last-name'>Last Name:</label>
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
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Role:</label>
              <input type="text" name="role" value={formData.role} disabled />
            </div>
          </div>

          <div className="password1">
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
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

          <div>
            <p className='privacy-policy'>
              By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button className= 'create-button' type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateMentorAccount;
