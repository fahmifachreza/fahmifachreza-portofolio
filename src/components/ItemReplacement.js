import React from 'react';
import ItemReplacementPng from '../assets/dummyWireframe.png';
import LazyLoad from 'react-lazyload';

export default function ItemReplacement() {
  return (
    <section className="container work" id="detailWork">
      <div className="clearfix mb4" id="topchat">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Item Replacement</h2>
            <p className="work-desc">
            Item Replacement is one of Tokopedia’s new features in 2017. The goal of this project is to reduce the amount of orders that are cancelled by sellers for any kind of reason. This feature provides buyers with similar product offered by another sellers. Each seller has the option to participate or opt out from this project. After being launched for one month, the order cancellation rate is decreased by 25% and the rate of new order is increased up to 40%.<br /> This was the first project I completed using React, GraphQL and Redux. I was involved in developing the stateless and full-state components, creating the interaction between components such as search product by invoice or product's name, and routing it with React-router.
            </p>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt2 relative">
          <LazyLoad throttle={200} key={0} height={200}>
            <img src={ItemReplacementPng} className="work-img" id="largeImage" alt="" />
          </LazyLoad>
          <div className="caption">
            <h3>
              Due to confidentiality, i couldn't show this to you now. But, i'll show you directly if we could arrange an interview.<br />
              Just send me an email at mfahmifachreza@gmail.com. Thank you.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
