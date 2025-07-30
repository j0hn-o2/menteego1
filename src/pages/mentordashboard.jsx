import React from 'react';
import './mentordashboard.css';
import { useNavigate } from 'react-router-dom';

function MentorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // or remove mentor info
    navigate('/loginmentoraccount');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Mentor</h2>
        <nav>
          <ul>
            <li className="active">Dashboard</li>
            <li>My Mentees</li>
            <li>Messages</li>
            <li>Resources</li>
            <li>Edit Profile</li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h1>Welcome, Mentor!</h1>
        </header>

        <section className="content">
          <div className="card">
            <h3>Mentees Summary</h3>
            <p>Accepted Mentees: 2</p>
            <p>Pending Requests: 1</p>
          </div>

          <div className="card">
            <h3>Next Actions</h3>
            <ul>
              <li>Review mentee requests</li>
              <li>Send messages to your mentees</li>
              <li>Upload new resources</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MentorDashboard;
