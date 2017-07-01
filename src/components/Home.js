import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, IndexLink, Link, browserHistory, Router } from 'react-router-dom';
import FrImage from '../assets/fr.png';
import TopChat from '../assets/topchat.png';

export default function Home() {
  return (
    <div>
      <section className="container hero clearfix" id="hero">
        <div className="hero-headtagline">
              A Product Designer and Front-end Developer who loves the design flows and product development.
          </div>
        <p>I am extremely amazed with the interaction between users and the product. I really enjoy to work on various projects with engineers, designers, data scientist or people with different backgrounds.</p>
      </section>
      <section className="container work" id="work">

        <div className="clearfix mb4" id="free-returns">
          <div className="col sm-col-12 md-col-7 lg-col-7">
            <div className="work-desc-wrap">
              <h2>Free return shipping microsites</h2>
              <p className="work-desc">Creating microsites for new feature Free Returns that has an objective to collect sellers subscriptions.  Involving in create the UI component based on information architecture through the front-end development with engineers.
The results after launch for one week is 60.000 sellers across the platform subscribed to this new feature</p>
              <a href="https://www.tokopedia.com/free-returns" target="_blank">Visit site</a>
              <a href="/frs">More details</a>
            </div>
          </div>
          <div className="col sm-col-12 md-col-5 lg-col-5">
            <img src={FrImage} className="work-img" alt="" />
          </div>
        </div>

        <div className="clearfix mb4" id="topchat">
          <div className="col sm-col-12 md-col-7 lg-col-7">
            <div className="work-desc-wrap">
              <h2>Topchat: Tokopedia Chat Feature</h2>
              <p className="work-desc">Creating new chating feature that has an objective to improve the experience of chatting flow and the interaction between merchant and buyer inside Tokopedia platform.</p>
              <a href="https://www.tokopedia.com/" target="_blank">Visit site</a>
              <a href="/topchat">More details</a>
            </div>
          </div>
          <div className="col sm-col-12 md-col-5 lg-col-5">
            <img src={TopChat} className="work-img" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
