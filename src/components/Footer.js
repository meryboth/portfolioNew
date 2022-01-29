import React from 'react';
import './Footer.css';

function Footer(props) {

  const condicion = props.darkMode === true ? "f0f0f0" : "7f058f";

  return <footer className='footer'>
      <ul className='footer__social'>
          <li><a href=""><img src="https://icongr.am/fontawesome/github.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href=""><img src="https://icongr.am/fontawesome/twitter.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href=""><img src="https://icongr.am/fontawesome/linkedin-square.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href=""><img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=f0f0f0" alt="" /></a></li>
      </ul>
      <p className='footer__rights'><small>© 2022 Marilyn Botheatoz. All Rights Reserved.</small></p>
  </footer>;
}

export default Footer;
