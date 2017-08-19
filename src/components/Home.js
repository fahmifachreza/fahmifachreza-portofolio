import React from 'react';
import FrImage from '../assets/fr.png';
import TopChat from '../assets/topchat.png';

export default function Home() {
  return (
    <div>
      <section className="container hero clearfix" id="hero">
        <div className="hero-headtagline">
          A Product Designer and Front-end Developer who loves to build a good interaction in every design iteration.
        </div>
        <p>I enjoy collaborating with engineers, designers, data scientists and people with different backgrounds to work on various projects. Seeing the interaction between the users and the product always inspires me to build an impactful products.</p>
      </section>
      <section className="container work" id="work">

        <div className="clearfix mb4" id="free-returns">
          <div className="col sm-col-12 md-col-7 lg-col-7">
            <div className="work-desc-wrap">
              <h2>Free return shipping microsites</h2>
              <p className="work-desc">As a team, we created the microsites for Tokopedia’s new feature Free Returns. This project’s objective is to collect Creating microsites for new feature Free Returns that has an objective to collect sellers subscriptions. I was involved in creating the UI component with HTML5, CSS3, and Javascipt based on information architecture through the deployment with engineers.
              After being launched for one week, the project receives 60,000 sellers across the platform subscribed to this new feature.</p>
              <a href="https://www.tokopedia.com/free-returns" rel="noopener noreferrer" target="_blank">Visit site</a>
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
              <a href="https://www.tokopedia.com/" rel="noopener noreferrer" target="_blank">Visit site</a>
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
