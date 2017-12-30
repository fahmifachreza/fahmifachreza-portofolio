import React from 'react';
import ItemReplacementJpg from '../assets/item_replacement.jpg';
import ItemReplacementPdf from '../assets/item_replacement.pdf';
import LazyLoad from 'react-lazyload';

export default function ItemReplacement() {
  return (
    <section className="container work" id="work">
      <div className="clearfix mb4" id="topchat">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Item Replacement</h2>
            <p className="work-desc">
              Item replacement is one of Tokopedia's new feature in 2017. The basic idea of this features is to reduce the order that being canceled by merchants with any kind of reason. This feature will find the same product that the first merchant canceled through another merchants in Tokopedia. Each merchants can decide whether they want to take this order or not. The results are pretty awesome. After being launched for one month, the order cancellation rate is decreased by 25% and the rate of new order is increased up to 40%.<br /> This was my first project using React, GraphQL and Redux. I involved in developing the stateless and full-state component, creating the interaction between component such as search product by invoice or product's name, and also routing it with React-router.
            </p>
            <a href="https://www.tokopedia.com/" rel="noopenner noreferrer" target="_blank" className="mb4">Visit site</a>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt4">
          <a href={ItemReplacementPdf} rel="noopenner noreferrer" target="_blank">
            <LazyLoad throttle={200} key={0} height={200}>
              <img src={ItemReplacementJpg} className="work-img" id="largeImage" alt="" />
            </LazyLoad>
          </a>
        </div>
      </div>
    </section>
  );
}
