import React from 'react';
import FrImageFull from '../assets/free-returns-full.png';

export default function Frs() {
  return (
    <section className="container work" id="work">
      <div className="clearfix mb4" id="free-returns">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Free return shipping microsites</h2>
            <p className="work-desc">
              Free Returns Shipping is a new feature in Tokopedia platform which allows buyers to
              returns their purchased item with free of charges if there's any mistaken in items
              that they received. Sellers in Tokopedia needs to have this new feature because it
              will give a good impact in terms of quality of service to customer and also improve
              Tokopedia's shopping experience. <br /> My role in this project was Front-end
              Developer and UI Engineer. It was a collective job, me and 2 other colleagues build
              this microsite and also all the design component related to this new feature. Me and
              my colleagues started to build the Information Architecture based on the objectives
              that we want to achieve which was 20.000 new sellers subscriptions to this product. We
              gathered all the design critique from our internal division and comes out with this
              mockup. My lesson learnt was at this project i manage to work in tight deadline and i
              collaborate with many talented engineers and designers. The development process
              (Coding and Testing) went well and we manage to deliver this microsites on time.
            </p>
            <a href="https://www.tokopedia.com/free-returns" target="_blank" className="mb4">
              Visit site
            </a>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt4">
          <img src={FrImageFull} className="work-img" alt="" />
        </div>
      </div>
    </section>
  );
}
