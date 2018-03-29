import React from 'react';
import LazyLoad from 'react-lazyload';
import TopchatImgFull from '../assets/topchatboard.png';
import TopChatPdf from '../assets/topchatboard.pdf';
import resumePdf from '../assets/resume.pdf';
// import TopchatImgFull from '../assets/dummyWireframe.png';


export default function Topchat() {
  return (
    <section className="container work" id="detailWork">
      <div className="clearfix mb4" id="topchat">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Topchat: Tokopedia Chat Feature</h2>
            <p className="work-desc">
            Topchat is a project that is originally created during Tokopedia’s internal Hackathon Challenge. Our team aims to improve the company’s current messaging platform by developing a new design that separate contents into different threads. It can be easily used by both sellers and buyers on desktop browser and mobile application. We are currently working to expand its functionality so that the transaction and check out process can be done inside the threads.</p>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt4 relative">
          <a href={TopChatPdf} rel="noopener noreferrer" target="_blank" >
            <LazyLoad throttle={200} key={0} height={200}>
              <img src={TopchatImgFull} className="work-img topchat-img" id="largeImage" alt="" />
            </LazyLoad>
          </a>
        </div>
      </div>
    </section>
  );
}
