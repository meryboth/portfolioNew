import React from 'react';
import './Footer.css';

function Footer(props) {

  return <footer className='footer'>
      <ul className='footer__social'>
          <li><a href="https://twitter.com/meryboth" target="_blank"><img src="https://icongr.am/fontawesome/twitter.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/marilyn-botheatoz/" target="_blank"><img src="https://icongr.am/fontawesome/linkedin-square.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href="https://www.instagram.com/meryboth/" target="_blank"><img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=f0f0f0" alt="" /></a></li>
          <li><a href="mailto:mbotheatoz@gmail.com" target="_blank"><img src="https://icongr.am/octicons/mail.svg?size=30&color=f0f0f0" alt="" /></a></li>
      </ul>
      <p className='footer__rights'><small>© 2022 Marilyn Botheatoz. All Rights Reserved.</small></p>
  </footer>;
}

export default Footer;
