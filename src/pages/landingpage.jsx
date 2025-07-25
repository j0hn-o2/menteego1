import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import image1 from '../assets/image-1.png'; // Adjust the path as necessary
import './landingpage.css'; // Assuming you have a CSS file for styling
import image2 from '../assets/image-2.jpg'; 
import { Link } from 'react-router-dom';


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
        <div className="container">
                <div className="section1">
                    <div className="section1-text">
                        <h2> Find the right mentor for you</h2>
                        <p>
                        <br/>Connect with expereienced mentors for guidance and support in your personal and professional growth. 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa soluta, alias repellendus officiis 
                        sunt delectus numquam sapiente quae ab corporis doloribus, id nihil odit porro odio nulla reprehenderit deleniti.
                        </p>

                        <div className='section1-buttons'>
                            <br/><button onClick={handleLoginClick} className='section1-login'>Login</button>
                            <button onClick={handleCreateAccountClick} className='section1-create'>Create Account</button>
                        </div>
                        
                        
                    </div>
                    {/* <div className="section1-image">
                        <img src={image2} alt="Image" />
                    
                    </div> */}
                    {/* </div> */}

                </div>

                <div className="section2">
                        <div className="section2-header">
                            <h2>FEATURES</h2>
                        </div>

                        <div className="section2-features">

                            <div className="section2-feature1">

                                <div className="section2-image">
                                    <img src={image1} alt="Image" />       
                                </div>

                                <div className="section2-feature1-text">
                                    <h3>
                                    MEET AND CONNECT WITH ACES PROFESSIONALS
                                    </h3>
                                    <p>
                                    <br/>Have one-on-one conversations with leading rofessionals from ACES.
                                    </p>
                                </div>

                            </div>
                    
                            <div className="section2-feature2">
                                <div className="section2-image">
                                    <img src={image1} alt="Image" />

                                </div>

                                <div className="section2-feature2-text">
                                    <h3>JOIN DISCUSSION GROUPS</h3>    

                                    <p>
                                        Share and participate within your community to learn about the latest trends.
                                        
                                    </p>  

                                </div>
                            </div>
                            
                            <div className="section2-feature3">

                                <div className="section2-image">
                                    <img src={image1} alt="Image" />

                                </div>
                                <div className="section2-feature3-text">
                                    <h3>
                                    ATTEND MENTOR SESSIONS AND PARTICIPATE IN DISCUSSIONS
                                    </h3>
                                    <p>
                                    <br/>Participating in discussions and attending sessions will gain you certificates and badges on your profile.
                                    </p>
                                </div>
                            </div>


                        </div>
                </div>

                <div className="section3">
                    {/* <div className="section3-content"> */}
                    <div className="section3-header">
                        <h2>HEAR FROM OUR ALUMNI</h2>
                    </div>

                    <div className="section3-reviews">
                        <div className="section3-review1">
                            <div className="review-text">
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                                officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                                beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                                </p>
                            </div>

                            <div className="review-profile">
                                <div className="review-image">
                                    <img src={image1} alt="Image" />
                                </div>
                                <p className='review-name'>
                                    John Doe<br/> Software Engineer
                                </p>
                            </div>
                        </div>
                    
                        <div className="section3-review1">
                            <div className="review-text">
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                                officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                                beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                                </p>
                            </div>
                            <div className="review-profile">
                                <div className="review-image">
                                <img src={image1} alt="Image" />
                                </div>
                                <p className='review-name'>
                                    John Doe<br/> Software Engineer

                                </p>
                            </div>

                        </div>

                        <div className="section3-review1">
                            <div className="review-text">
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Quidem voluptatum sit accusantium eos mollitia ducimus nobis quod nihil. Eius nemo necessitatibus, exercitationem labore itaque expedita 
                                officia enim veritatis maiores fugit corporis molestiae iure, dicta quis minima. Doloribus praesentium dolorum perspiciatis, 
                                beatae asperiores tenetur nemo reiciendis vitae est ratione nostrum! Et?
                                </p>
                            </div>
                            <div className="review-profile">
                                <div className="review-image">
                                <img src={image1} alt="Image" />
                                </div>
                                <div className='review-nam'>
                                    <p className='review-name'>John Doe</p><p className='review-nam2'>Software Engineer</p> 
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>          

    </div>
        
);

}

export default LandingPage;