import React from 'react';
import { Link } from 'react-router-dom';


export default function MobileHeader() {
  return (
    <header className="mobile-nav-wrap">
      <nav>
        <ul className="mobile-nav-list">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/bio">Bio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
