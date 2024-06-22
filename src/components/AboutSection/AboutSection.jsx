import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AboutSection.css';
import shruti from './shruti.png';
import ujjwal from './ujjwal.jpeg';

const AboutSection = () => {
  const people = [
    {
      name: 'Shruti Thakur',
      picture: shruti,
      college: 'Birla Institute of Technology, Mesra',
      stream: 'Computer Science and Engineering',
      linkedin: 'https://www.linkedin.com/in/shrutithakur20/',
      github: 'https://github.com/Shruti2-0Thakur/',
      email: 'shrutithakur9508@gmail.com',
    },
    {
      name: 'Ujjwal Singh',
      picture: ujjwal,
      college: 'Birla Institute of Technology, Mesra',
      stream: 'Computer Science and Engineering',
      linkedin: 'https://www.linkedin.com/in/singh-ujjwal45',
      github: 'https://github.com/07ujjwal',
      email: 'ujjwalphy9@gmail.com',
    },
  ];

  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <div className="cards-container">
        {people.map((person, index) => (
          <div className="card" key={index}>
            <img src={person.picture} alt={`${person.name}`} />
            <h3>{person.name}</h3>
            <p><strong>College:</strong> {person.college}</p>
            <p><strong>Stream:</strong> {person.stream}</p>
            <div className="social-links">
              <a href={`mailto:${person.email}`} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href={person.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
