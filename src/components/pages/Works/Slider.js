import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import './Slider.css';
import projects from './Projects';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1},
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Slider() {
  const projectData = projects;
  const cardProject = projectData.map((project) => {
    return (
      <Item
        key={project.id}
        title={project.title}
        img={project.img}
        url={project.url}
        repositorio={project.repositorio}
        javascript={project.javascript}
        html={project.html}
        css={project.css}
        react={project.react}
      />
    );
  });
    
  return <div className='slider'>
    <Carousel breakPoints={breakPoints}>
      {cardProject}
    </Carousel>
      
  </div>;
}

export default Slider;
