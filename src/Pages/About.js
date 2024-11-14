import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About YouTranslate &#10132;</h1>
      <p>
        At YouTranslate, we're all about making it easy for people to connect, no matter what language they speak.
        Our goal is to offer translation services that are accurate and reliable, so anyone can communicate effortlessly. Built on a commitment to quality and happy customers.
      </p>
      
      <h2 className="our story">Our Story &rarr;</h2>
      <p>
        It all started with the idea of connecting people and businesses, no matter where they were or what language they spoke. We saw the need for high-quality translation services growing as the world became more connected, so we decided to build a platform that could bridge those language gaps.
      </p>

      <h2 className="our values">Our Values &rarr;</h2>
      <ul>
        <li><strong>Integrity:</strong> I always aim to do my best, ensuring every translation is top-notch and reliable.</li>
        <li><strong>Excellence:</strong> I focus on creativity and innovation to make my services better and keep up with industry trends.</li>
      </ul>

      <h2 className="project highlight">Project Highlights &rarr;</h2>
      <ul>
        <li><strong>Built with React:</strong> This app is developed using the latest tech like React for a smooth experience.</li>
        <li><strong>Multiple Language Support:</strong> Supports translations for many popular languages for global connectivity.</li>
        <li><strong>User-Friendly Design:</strong> A design that’s simple and accessible to all users.</li>
        <li><strong>Real-Time Translations:</strong> Instant translations for casual or formal conversations.</li>
      </ul>

      <h2 className="vision">Our Vision &rarr;</h2>
      <p>
        "As the world connects further, we want this app to foster appreciation for different cultures. By making translation accessible, we’re aiming to bring people closer."
      </p>

      <h2 className="future">Future Improvements &rarr;</h2>
      <p>
        We're planning to add features like voice-to-text, dark mode, more languages, and enhanced accuracy to make this tool even more valuable.
      </p>
    </div>
  );
};

export default About;
