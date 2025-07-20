import React from 'react';
import { Link } from 'react-router-dom';
import Footer from'../components/footer'; 
import './index.css';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to My Portfolio!</h2>
      <p className="about-text">As a passionate software developer with a strong background in web application development, I am dedicated to crafting clean, efficient, and user-friendly solutions. My journey in technology has equipped me with a solid understanding of front-end and back-end development, enabling me to create dynamic and visually engaging web applications.</p>
      <p className="about-text">In this portfolio, you’ll find an overview of my current and past projects, my core services, and my professional experience. I believe in continuous learning and innovation, and I strive to contribute to impactful projects that improve user experiences and drive business success.</p>
      <p className="about-text">Feel free to explore my work, learn more about my approach to software development, and connect with me to discuss potential collaborations.</p>
      <p className="about-text">Thank you for visiting!</p>
      <Link to="/about">Learn more about me</Link>
    </div>
  );
}

export default Home;
