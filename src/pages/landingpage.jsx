import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './landingpage.css'; 
import image1 from '../assets/image-1.png';  


function LandingPage() {

    const navigate = useNavigate();
    const handleCreateAccountClick = () => {
    navigate('selectusertype');
    }
    const handleLoginClick = () => {
    navigate('/selectlogintype');
    }

    
  return (
    <div className="landing-page">
        <div className="section1">
            <div className="section1-text">
                <h1> FIND THE RIGHT MENTOR FOR YOU</h1>
                <p>
                    Connect with experienced mentors who understand the challenges and 
                    opportunities of college life. Whether you're adjusting to your first year, exploring career paths, 
                    applying for internships, or preparing for graduation, 
                    our mentors are here to help you every step of the way. With the right mentor, you'll feel more confident making decisions, 
                    setting goals, and building a future you're proud of.
                </p>
            </div>

            <div className='section1-buttons'>
                <button onClick={handleLoginClick} className='section1-login'>Login</button>
                <button onClick={handleCreateAccountClick} className='section1-create'>Create Account</button>
            </div>
                        
        </div>

        <div className="middle-section">

            <div className="section2">
                <div className="section2-header">
                    <h2>WHY CHOOSE MENTEEGO</h2>
                </div>

                <div className="section2-text">
                    <p>
                        MenteeGo is a platform designed to connect students with mentors who can provide guidance, support, and advice throughout their college journey. 
                        Whether you're looking for help with academics, career planning, or personal development, our mentors are here to assist you.
                    </p>
                    <p>
                        Sign up for an account, select your user type, and start exploring our network of mentors.
                        You can search for mentors based on their expertise, availability, and interests.
                  
                        Once you find a mentor that matches your needs, you can send them a message to start a conversation.
                        Our platform also allows you to join discussion groups, attend mentor sessions, and participate in community events.
                    </p>
                </div>

            </div>

            <div className="section3">
                <div className="section3-part1">
                    <div className="feature1">
                        <div className="feature1-image">
                            <img src={image1} alt="Connect with Mentors" />
                        </div>
                        <div className="feature1-text">
                            <p>
                                <strong>Meet & Connect</strong>
                                Have one-on-one conversations with leading professionals and industry experts who can guide your career path and personal growth.
                            </p>
                        </div>
                    </div>

                    <div className="feature2">
                        <div className="feature2-image">
                            <img src={image1} alt="Join Communities" />
                        </div>
                        <div className="feature2-text">
                            <p>
                                <strong>Join Groups</strong>
                                Connect with peers in your field, share experiences, and learn from collective knowledge in specialized discussion groups.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section3-part2">
                    <div className="feature3">
                        <div className="feature3-image"> 
                            <img src={image1} alt="Earn Achievements" />
                        </div>
                        <div className="feature3-text">
                            <p>
                                <strong>Earn Recognition</strong>
                                Participate in discussions and attend sessions to earn certificates and badges that showcase your learning journey.
                            </p>
                        </div>
                    </div>

                    <div className="feature4">
                        <div className="feature4-image"> 
                            <img src={image1} alt="Active Learning" />
                        </div>
                        <div className="feature4-text">
                            <p>
                                <strong>Stay Engaged</strong>
                                Access exclusive resources, attend workshops, and participate in events designed to accelerate your professional development.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className="section4">
            <div className="section4-header">
                <h2>HEAR FROM OUR COMMUNITY</h2>
            </div> 

            <div className="section4-review">
                <div className="review1">
                    <div className="review1-text">

                        <p>
                            "MenteeGo completely transformed my college experience. My mentor helped me navigate internship applications, 
                            refine my resume, and build confidence in my career choices. The personalized guidance I received was invaluable 
                            and directly contributed to landing my dream job at a top tech company."
                        </p>

                    </div>
                    <div className="review1-profile">
                        <div className="review1-image">
                            <img src={image1} alt="Sarah Chen" />
                        </div>
                        <div className='review1-name'>
                            <p>Sarah Chen</p>
                            <p className='name-role'>Software Engineer at Google</p>
                        </div>
                    </div>
                </div>


                <div className="review2">
                    <div className="review2-text">

                        <p>
                            "As a mentor on MenteeGo, I've had the privilege of guiding bright students through their academic and career journeys. 
                            The platform makes it easy to share knowledge and experience. Seeing my mentees grow and succeed has been incredibly 
                            rewarding. It's a fantastic way to give back to the community."
                        </p>

                    </div>
                    <div className="review2-profile">
                        <div className="review2-image">
                            <img src={image1} alt="Dr. Michael Rodriguez" />
                        </div>
                        <div className='review2-name'>
                            <p>Dr. Michael Rodriguez</p>
                            <p className='name-role'>Senior Data Scientist at Microsoft</p>
                        </div>
                    </div>
                </div>

                <div className="review3">
                    <div className="review3-text">

                        <p>
                            "The group discussions and workshops on MenteeGo exposed me to diverse perspectives and industry insights I wouldn't 
                            have found elsewhere. The community is supportive, and the resources are top-notch. I've made valuable connections 
                            that will last throughout my career."
                        </p>

                    </div>
                    <div className="review3-profile">
                        <div className="review3-image">
                            <img src={image1} alt="Alex Thompson" />
                        </div>
                        <div className='review3-name'>
                            <p>Alex Thompson</p>
                            <p className='name-role'>Marketing Manager at Amazon</p>
                        </div>
                    </div>
                </div>

            </div>
                        
        </div>
                

    </div>
        
);

}

export default LandingPage;