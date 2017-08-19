import React from 'react';
import { Link } from 'react-router-dom';
import TopchatImgFull from '../assets/topchatboard.png';
import TopchatBoardPdf from '../assets/topchatboard.pdf';


export default function ItemReplacement() {
  return (
    <section className="container work" id="work">
      <div className="clearfix mb4" id="topchat">
        <div className="col sm-col-12 md-col-12 lg-col-12">
          <div className="work-desc-wrap">
            <h2>Item Replacement</h2>
            <p className="work-desc"></p>
            <a href="https://www.tokopedia.com/" target="_blank" className="mb4">Visit site</a>
          </div>
        </div>
        <div className="col sm-col-12 md-col-12 lg-col-12 mt4">
          <a href={TopchatBoardPdf} target="_blank"><img src={TopchatImgFull} className="work-img" id="largeImage" alt="" /></a>
        </div>
      </div>
    </section>
  );
}
