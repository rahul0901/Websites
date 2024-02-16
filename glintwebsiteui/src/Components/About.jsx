import React, { useEffect, useState } from 'react';
import './About.css';
import './MediaAbout.css';

const About = () => {

  const scoreCards = [
    { score: 127, title: 'Awards Received' },
    { score: 1905, title: 'Cups of Coffee' },
    { score: 109, title: 'Projects Completed' },
    { score: 102, title: 'Happy Clients' }
  ];


  const [animatedScores, setAnimatedScores] = useState(scoreCards.map(() => 0));

  useEffect(() => {
    const animationDuration = 3000;
    const interval = 50;
    const updateInterval = animationDuration / interval;

    const timers = scoreCards.map((item, index) => {
      const step = item.score / updateInterval;
      let currentScore = 0;
      const timer = setInterval(() => {
        currentScore = Math.min(item.score, Math.ceil(currentScore + step));
        setAnimatedScores(prevScores => {
          const newScores = [...prevScores];
          newScores[index] = currentScore;
          return newScores;
        });
        if (currentScore >= item.score) {
          clearInterval(timer);
        }
      }, interval);
      return timer;
    });

    // Clear all timers on component unmount to prevent memory leaks
    return () => timers.forEach(timer => clearInterval(timer));
  }, []); // Dependency array to ensure useEffect runs only once

  return (
    <>
      <div className="screen-about" id='about'>
        <div className="about-parent">
          <div className="about-up-line">
          </div>
          <div className="about-head">
            <span>Hello There</span>
            <h2>We are glint</h2>
          </div>
          <div className="about-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          </div>
          <div className="about-score-cards-parent">
            {scoreCards?.length ? <div className='score-card-inner-parent'>
              {scoreCards.map((item, i) => (
                <div className='score-card-inner-child' key={i}>
                  <span>{animatedScores[i]}</span>
                  <a>{item.title}</a>
                </div>
              ))}
            </div> : <div>Loading..</div>}
            {/* <div className="score-child-1">

            </div>
            <div className="score-child-2">

            </div>
            <div className="score-child-3">

            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default About;