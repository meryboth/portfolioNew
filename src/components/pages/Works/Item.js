import React from 'react';
import "./Item.css";

export default function Item(props) {
  return <div className='card'>
      <div className='card__content'>
        <img src={props.img} alt="" className='card__img'/>
        <div className='card__description'>
          <h3 className='card__title'>{props.title}</h3>
          <p className='card__text'>{props.description}</p>
        </div>
         <div className='card__icons'>
           <ul className='card__tec'>
             {props.javascript && <li><ion-icon name="logo-javascript"></ion-icon></li>}
             {props.html &&<li><ion-icon name="logo-html5"></ion-icon></li>}
             {props.css &&<li><ion-icon name="logo-css3"></ion-icon></li>}
             {props.react &&<li><ion-icon name="logo-react"></ion-icon></li>}
           </ul>
           <span>|</span>
           <ul className='card__code'>
             <li><a href={props.repositorio}><ion-icon name="logo-octocat"></ion-icon></a></li>
             <li><a href={props.url}><ion-icon name="globe-outline"></ion-icon></a></li>
           </ul>
         </div>
      </div>
  </div>;
}