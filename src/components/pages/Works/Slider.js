import React from 'react';
import Card from './Card';
import './Slider.css';

function Slider() {
  return <div className='slider'>
      <a href=""><img src="https://icongr.am/fontawesome/chevron-left.svg?size=30&color=ffffff" alt="" className='slider__icon' /></a>
      <Card/>
      <a href=""><img src="https://icongr.am/fontawesome/chevron-right.svg?size=30&color=ffffff" alt="" className='slider__icon' /></a>
  </div>;
}

export default Slider;
