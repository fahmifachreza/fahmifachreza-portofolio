import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="container clearfix desktop-nav-wrap">
      <div className="col sm-col-4 md-col-3 lg-col-3 logowrap">
        <h1><Link to="/">Fahmi Fachreza</Link></h1>
      </div>
      <nav className="col sm-col-8 md-col-9 lg-col-9 desktop-nav">
        <ul>
          <li><a href="https://github.com/fahmifachreza"><i className="icon icon_github" /></a></li>
          <li><a href="https://www.linkedin.com/in/mfahmif/"><i className="icon icon_linkedin" /></a></li>
          <li><a href="https://sourcerer.io/fahmifachreza"><i className="icon icon_sourcerer" /></a></li>
        </ul>
      </nav>
    </header>
  );
}
