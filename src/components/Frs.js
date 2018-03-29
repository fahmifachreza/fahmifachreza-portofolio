import React from 'react';
import FrImageFull from '../assets/free-returns-full.png';
import LazyLoad from 'react-lazyload';

export default function Frs() {
  return (
    <section className="container work" id="detailWork">
      <div className="clearfix mb4" id="freeReturns">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Free return shipping microsites</h2>
            <p className="work-desc">
            Free Returns is Tokopedia’s new feature which allows buyers to return their purchased item free of charge if there is any mistake in the item received. Aside from improving Tokopedia’s shopping experience, it also allows sellers to improve the quality of their customer service. In this project I worked as a Front End Developer and UI Engineer. With the help of two colleagues, we started by developing the information architecture and setting the objective to gather 20,000 sellers to subscribe. We communicated closely with our internal division and participated in the design critique to improve the mockup. At the end we managed to finish the development process on time and conduct usability testing. As a result the project exceeds the original expectation by 200%. It successfully receives 60,000 sellers subscribe to this new feature after being launched for one week.
            </p>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt4 relative">
          <LazyLoad throttle={200} key={0} height={200}>
            <img src={FrImageFull} className="work-img" alt="" />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
}
