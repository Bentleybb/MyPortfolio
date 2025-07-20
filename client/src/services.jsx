import React from 'react';
import './index.css'; 
import webDevImg from './assets/web-dev.jpg';
import webDevThumb from './assets/web-dev-thumb.jpg';
import mobileAppImg from './assets/mobile-app.jpg';
import mobileAppThumb from './assets/mobile-app-thumb.jpg';
import dataAnalysisImg from './assets/data-analysis.png';
import dataAnalysisThumb from './assets/data-analysis-thumb.png';

function Services() {
  const services = [
  {
    title: 'Web Development',
    description: 'A dynamic web gallery to showcase Pixar movies using JavaScript.',
    thumbnail: webDevThumb,
    largeImage: webDevImg,
    link: 'https://github.com/Bentleybb/Pixar-Movie-Gallery'
  },
  {
    title: 'Mobile Apps',
    description: 'Building intuitive mobile applications for iOS and Android.',
    thumbnail: mobileAppThumb,
    largeImage: mobileAppImg,
    link: 'https://github.com/Bentleybb/Excel_Pivot-Tables-and-charts'
  },
  {
    title: 'Data Analysis',
    description: 'Turning data into actionable insights.',
    thumbnail: dataAnalysisThumb,
    largeImage: dataAnalysisImg,
    link: 'https://github.com/Bentleybb/Binli_DataAnalyst.github.io'
  }
];

  return (
    <div className="container">
      <h2>My Services</h2>
      <section className="service-list2">
        {services.map((service, index) => (
          <article key={index}>
            
            <a href={service.largeImage} target="_blank" rel="noopener noreferrer">
              <img src={service.thumbnail} alt={service.title} className="service-image3" />
              View Larger Picture
            </a>
            <h3>{service.title}</h3>
            <p className="about-text">{service.description}</p>
            <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">
              Learn More
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Services;
