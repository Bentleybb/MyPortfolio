import React from 'react';
import './index.css';
import trafficLightAppThumb from './assets/traffic-app-thumb.png';
import trafficLightAppImg from './assets/traffic-app.png';
import functionalitiesThumb from './assets/functionalities-thumb.png';
import functionalitiesImg from './assets/functionalities.png';
import madThumb from './assets/mad-thumb.png';
import madImg from './assets/mad.png';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Traffic Light App',
      description: 'An implement functionality for six buttons to control the light states, cycle through predefined colors, and generate random light changes.',
      thumbnail: trafficLightAppThumb,
      largeImage: trafficLightAppImg,
      link: 'https://storied-cassata-702141.netlify.app/'
    },
    {
      id: 2,
      title: 'Implement Functionalities',
      description: 'An implement JavaScript functionalities based on the given questions. Including Hover Counters, Simple Comment System, Typing Effect, Division Calculator (Try-Catch), Temperature Converter, Checkered Box Grid and Debugging Task - Vowel Counter.',
      thumbnail: functionalitiesThumb,
      largeImage: functionalitiesImg,
      link: 'https://timely-sfogliatella-4a64bf.netlify.app/'
    },
    {
      id: 3,
      title: 'Mad Libs Game',
      description: 'Mad Libs is a word game where one player prompts another for a list of words to substitute for blanks in a story. The game is typically played by asking for specific types of words (nouns, adjectives, verbs, etc.) without revealing the context. Once all words are collected, they’re inserted into the story, often creating humorous or nonsensical results.',
      thumbnail: madThumb,
      largeImage: madImg,
      link: 'https://chimerical-cajeta-51400f.netlify.app/'
    }
  ];

  return (
    <div className="container">
      <h2>My Projects</h2>
      <section className="service-list2">
        {projectList.map((project, index) => (
          <article key={index}>
            {/* Larger image link */}
            <a href={project.largeImage} target="_blank" rel="noopener noreferrer">
              <img src={project.thumbnail} alt={project.title} className="service-image3" />
              View Larger Picture
            </a>
            <h3>{project.title}</h3>
            <p className="about-text">{project.description}</p>
            {/* Link to the project page */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="service-link"
            >
              Visit Project
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Projects;
