import React from 'react';
import logo from './resources/Portrett.jpeg';
import './App.css';

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Coding Portfolio</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my portfolio! Here are some of my projects:</p>
      </header>
      <main className="Project-list">
        {projects.map((project, index) => (
          <div className="Project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a className="Project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
