import React from 'react';
import techIcons from './tech-items.js';

const Tech = () => {
  return (
    <section id="tech" class="campanies">
      <div class="container">
        <div class="row text-center">
          <h4 class="fw-bold lead mb-3">I'm familiar with all this stuff and more</h4>
          <div class="heading-line"></div>
        </div>
      </div>
      <div class="container">
        {Object.keys(techIcons).map(header => (
          <div class="row shadow-sm">
            <span class="technologies__header display-4">{header}:</span>
            {techIcons[header].map(item => (
              <span class="technologies__logo-box">
                <img src={item.source} alt={item.name} title={header}></img>
                <p>{item.name}</p>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tech;