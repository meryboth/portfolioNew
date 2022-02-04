import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header(props) {
 
  return (
  
    <header className="header-Dark">
    <div className='header__menu'>
        <Link to="/" className='header__logo'>
            <img src="https://icongr.am/fontawesome/code.svg?size=30&color=f0f0f0" alt="logo code" />
            <h2>Marilyn Botheatoz</h2>
        </Link>
        <nav>
        <ul className='header__nav'>
            <li className='header__nav-item'>
                <Link to="/works">Works</Link>
            </li>
            <li className='header__nav-item'>
                <Link to="/posts">Posts</Link>
            </li>
            <li className='header__nav-item'><a href="https://github.com/meryboth" className='align-center' target="_blank"><img src="https://icongr.am/fontawesome/github-alt.svg?size=20&color=f0f0f0" alt="cuenta de github" /> Source</a></li>
        </ul>
    </nav>
    </div>
    
    <div className='header__mode'>
        <a>
        <img src="https://icongr.am/fontawesome/toggle-off.svg?size=40&color=f0f0f0" alt="" />
        </a>
    </div>
  </header>);
}

export default Header;
