import React from 'react';
import logo from './resources/Portrett.jpeg';
import './App.css';

function App() {
  const projects = [
    {
      title: 'CatsVsRats',
      description: 'Tower defense game',
      graphic: require('./resources/returnOfTheRats.gif'),
      link: 'https://github.com/TheodorN-M/CatsVsRats',
    },
    {
      title: 'Connect4',
      description: 'Written in Java with AI',
      graphic: require('./resources/Kort_demo.mov'),
      link: 'https://github.com/TheodorN-M/connect4AI',
    },
    {
      title: '3D Flight visualization',
      description: 'Flight path visualization app',
      graphic: require('./resources/KL1953.gif'),
      link: 'https://github.com/TheodorN-M/flightradar24_visualization',
    },

  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Theodor Nissen-Meyer's Portfolio</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to my portfolio! Here are some of my projects:</p>
      </header>
      <main className="Project-list">
        {projects.map((project, index) => (
          <div className="Project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img className="Project-image" src={project.graphic} alt={`${project.title} screenshot`} />
            <a className="Project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
