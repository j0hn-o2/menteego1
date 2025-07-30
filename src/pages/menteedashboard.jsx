import React from 'react';
import './menteedashboard.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function MenteeDashboard() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  
      useEffect(() => {
      const storedName = localStorage.getItem('first_name');
      if (storedName) {
          setFirstName(storedName);
      } else {
          navigate('/loginmentoraccount');
      }
      }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // or remove user info
    navigate('/loginmenteeaccount');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Mentee</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>My Mentor</li>
            <li><Link to='/dashboard/messages'> Messages</Link></li>
            <li>Resources</li>
            <li>Edit Profile</li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h1>Welcome, {firstName ? firstName.toUpperCase() : ''}!</h1>
        </header>

        <section className="content">
          <div className="card">
            <h3>Your Assigned Mentor</h3>
            <p>Mentor Name: Jane Doe</p>
            <p>Expertise: Software Engineering</p>
          </div>

          <div className="card">
            <h3>Next Steps</h3>
            <ul>
              <li>Send a message to your mentor</li>
              <li>Download shared resources</li>
              <li>Update your profile</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MenteeDashboard;
