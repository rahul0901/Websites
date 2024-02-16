import React from 'react';
import './Home.css';
import './MediaHome.css';
import About from './About';
import Header from './Header';
import Services from './Services';
import Works from './Works';

const Home = () => {
  return (
    <>
      <Header />
      <div className="screen-home" id='home'>
        <div className="home-parent">
          <div className="home-child-left">
            {/* <div className="home-content"> */}
            <span>Welcome to Glint</span>
            <p>We are a creative group of people who design influential brands and digital experiences.</p>
            <div className="home-child-left-btn">
              <button>Start a project</button>
              <button>more about us</button>
            </div>
            {/* </div> */}
          </div>
          <div className="home-child-right-bar">
            <i class="fa-brands fa-facebook fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
            <i class="fa-brands fa-instagram fa-lg"></i>
            <i class="fa-brands fa-whatsapp fa-lg"></i>
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </div>
        </div>

        <div className="scroll-line">
          <i class="fa-solid fa-angle-down"></i>
          <span>scroll down</span>
        </div>
      </div>
      <About />
      <Services />
      <Works />
    </>
  )
}

export default Home;