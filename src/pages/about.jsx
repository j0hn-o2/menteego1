import React from 'react';
import './about.css';
import { FaHandshake, FaUserGraduate, FaChalkboardTeacher, FaClock } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>

        <section className="section">
          <FaHandshake className="icon" />
          <h2>From Aspiring to Achieving</h2>
          <p>
            At <strong>Menteego</strong>, we believe everyone deserves the right guidance to reach their
            full potential. We're a mentorship platform designed to bridge the gap between aspiring individuals (mentees)
            and experienced professionals (mentors) from various fields.
          </p>
          <p>
            Whether you're a student seeking direction, a young professional exploring your path, 
            or a mentor eager to give back—Menteego is your space to connect, grow, and succeed together.
          </p>
        </section>

        <section className="section">
          <FaUserGraduate className="icon" />
          <h2>Our Mission</h2>
          <ul>
            <li><MdArrowForward className="bullet-icon" /> Match mentees and mentors through a supportive system</li>
            <li><MdArrowForward className="bullet-icon" /> Enable personalized growth journeys</li>
            <li><MdArrowForward className="bullet-icon" /> Equip mentors with effective tools and resources</li>
            <li><MdArrowForward className="bullet-icon" /> Foster collaboration, accountability, and inspiration</li>
          </ul>
        </section>

        <section className="section">
          <FaChalkboardTeacher className="icon" />
          <h2>What We Offer</h2>
          <ul>
            <li><MdArrowForward className="bullet-icon" /> One-on-one mentorship sessions</li>
            <li><MdArrowForward className="bullet-icon" /> Group discussions and virtual workshops</li>
            <li><MdArrowForward className="bullet-icon" /> Flexible schedules to suit your learning pace</li>
            <li><MdArrowForward className="bullet-icon" /> A safe, inclusive, and empowering environment</li>
          </ul>
        </section>

        <section className="section">
          <FaClock className="icon" />
          <h2>Flexible Learning</h2>
          <p>
            We understand that every journey is unique. Menteego supports flexible mentoring formats—
            from individual sessions to group collaborations—so users can engage in ways that suit 
            their preferences and schedules.
          </p>
        </section>

        <div className="cta-buttons">
          <Link to="/creatementoraccount" className="cta-btn">Become a Mentor</Link>
          <Link to="/creatementeeaccount" className="cta-btn alt">Find a Mentor</Link>
        </div>

      </div>
    </div>
  );
}

export default About;
