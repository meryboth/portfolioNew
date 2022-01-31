import React from 'react';
import './Item.css';
import "./Card.css";

export default function Item() {
  return <div className='card'>
      <img src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className='card__img'/>
       <div className='card__icons'>
         <ul className='card__tec'>
           <li>HTML5</li>
           <li>CSS3</li>
           <li>JAVASCRIPT</li>
         </ul>
         <span>|</span>
         <ul className='card__code'>
           <li><a href=""><img src="https://icongr.am/fontawesome/github-alt.svg?size=20&color=6b6b6b" alt="" /></a></li>
           <li><a href=""><img src="https://icongr.am/fontawesome/rocket.svg?size=20&color=6b6b6b" alt="" /></a></li>
         </ul>
       </div>
  </div>;
}