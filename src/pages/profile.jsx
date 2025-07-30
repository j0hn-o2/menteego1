import React, { useEffect, useState } from 'react';
import './profile.css'; // Optional for styling

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your actual backend endpoint
    fetch('http://localhost/menteego_backend/auth/get_profile.php', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include token or credentials if needed
        // Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setProfile(data.profile);
        } else {
          setError(data.message || 'Failed to fetch profile.');
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Server error.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-details">
        <img
        //   src={profile.profile_image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <p><strong>First Name:</strong> {profile.first_name}</p>
          <p><strong>Last Name:</strong> {profile.last_name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
          <p><strong>Student ID:</strong> {profile.student_id}</p>
          <p><strong>Role:</strong> {profile.role}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
