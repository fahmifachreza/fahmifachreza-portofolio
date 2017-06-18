import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="container clearfix desktop-nav-wrap">
      <div className="col lg-col-3 logowrap">
        <h1><Link to="/">Fahmi Fachreza</Link></h1>
      </div>
      <nav className="col lg-col-8 desktop-nav">
        <ul>
          <li><Link to="/work" id="gowork">Work</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
