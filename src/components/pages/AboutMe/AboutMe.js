import React from 'react';
import "./AboutMe.css";

function AboutMe() {
  return <div className='aboutme'>
    <div className='aboutme__profile'>
      <div className='aboutme__img'>
      <div className='aboutme__content'>
        <img src={"./images/mbotheatoz.png"} alt="Marilyn Botheatoz"/></div>
      </div>
      <div className='aboutme__text'>
        <h1 className='aboutme__title'>About me</h1>
        <p>Hi there!  <br />
        I am Marilyn, a frontend developer based in Buenos Aires, Argentina.
        React Js is my favorite tool for creating intuitive and funcional web apps.
        <br />
        My pasion for design is a big part of my work. My goal in each project is to bring to life the most interesting and creative ideas.
        <br />
        When i am not coding i am doing some design work, running, or playing videogames.
        </p>
      </div>
    </div>
    <div className='about-skills'>
    <h2 className='aboutme__skills-title'>Skills</h2>
      <ul className='aboutme__skills'>
        <li><img src="https://icongr.am/devicon/html5-plain.svg?size=25&color=ffffff" alt="" /></li>
        <li><img src="https://icongr.am/devicon/css3-plain.svg?size=25&color=ffffff" alt="" /></li>
        <li><img src="https://www.nicepng.com/png/full/377-3771906_sass-sass-sass-sass-logo-white-png.png" alt="" /></li>
        <li><img src="https://icongr.am/devicon/bootstrap-plain.svg?size=25&color=ffffff" alt="" /></li>
        <li><img src="https://www.coherentsolutions.com/wp-content/uploads/2020/08/react-logo-white.png" alt="" /></li>
        <li><img src="https://icongr.am/devicon/javascript-plain.svg?size=25&color=ffffff" alt="" /></li>
        <li><img src="https://icongr.am/devicon/git-plain.svg?size=25&color=ffffff" alt="" /></li>
        <li><img src="https://icongr.am/devicon/photoshop-line.svg?size=25&color=ffffff" alt="" /></li>
        <li><ion-icon name="logo-figma"></ion-icon></li>
      </ul>
      <h2 className='aboutme__education-title'>Education</h2>
      <ul className='aboutme__education'>
        <li>Frontend - Coderhouse</li>
        <li>FullStack Dev - UTN</li>
        <li>Architect - University of Buenos Aires</li>
      </ul>
    </div>
  </div>;
}

export default AboutMe;
