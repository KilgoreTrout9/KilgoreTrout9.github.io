import React from 'react';
import ShowMe from '../../../images/show-me-what-you-got-2.gif';

const Landing = () => {
  return (
    <section id="home" class="intro-section">
      <div class="container">
        <div class = "row align-items-center text-white">
          {/* <!-- Content for the left side of the intro screen --> */}
          <div class="col-md-6 intros">
            <h1 class="display-2">
              <span class="display-2--intro">Hello, I'm Pete</span>
              <span class="display-2--description lh-base">
                Welcome to my Portfolio. This is a multi-purpose responsive layout created with React, Bootstrap v5 and Sass.
              </span>
            </h1>
            <button type="button" class="rounded-pill btn-rounded">
              Get in Touch
              <span><i class="fas fa-satellite-dish" ></i></span>
            </button>
          </div>
          {/* <!-- Content for the right side of the intro screen --> */}
          <div class="col-md-6 intros text-center">
            <div class="video-box">
              <img src={ShowMe} alt="video gif" class="img-fluid"></img>
              <a href="#">
                <span>
                  <i class="fas fa-play-circle"></i>
                </span>
                <span class="border-animation border-animation--border-1"></span>
                <span class="border-animation border-animation--border-2"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background wave at the bottom of the section --> */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L30,128C60,160,120,224,180,208C240,192,300,96,360,96C420,96,480,192,540,197.3C600,203,660,117,720,106.7C780,96,840,160,900,176C960,192,1020,160,1080,160C1140,160,1200,192,1260,197.3C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
    </section>
  )
}

export default Landing;