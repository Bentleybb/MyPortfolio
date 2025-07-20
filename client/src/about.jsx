import React from 'react';
import './index.css';
import mePhoto from './assets/me.jpg'; 
import pdfIcon from './assets/pdf-icon.png'; 
import auth from '../lib/auth-helper';


function About() {
  return (
    <div className="container">
      <h2>About Me</h2>

      {/* Flex container for image and text side by side */}
      <div className="about-container">
        <div className="about-text">
          <p className="about-text">Hi! I’m Binli, a dedicated software developer with a strong interest in data science. I also have a background in business, which gives me a unique perspective on how technology can drive value.</p>
          <p className="about-text">Beyond coding, I enjoy painting, hiking, and listening to classical music. I love meeting new friends and learning new things, always seeking out ways to combine creativity and curiosity in everything I do.</p>
          <p className="about-text">Feel free to check out my projects and connect—I’m always excited to collaborate and explore new ideas!</p>
          {auth.isAuthenticated() && (
            <p className="about-text">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <img src={pdfIcon} alt="PDF icon" width="20" style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                Download My Resume (PDF)
              </a>
            </p>
          )}
        </div>
        <img src={mePhoto} alt="Me" className="about-image" />
      </div>
    </div>
  );
}

export default About;
