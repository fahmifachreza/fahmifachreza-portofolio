import React from 'react';
import { Link } from 'react-router-dom';
import TopchatImgFull from '../assets/topchatboard.png';
import TopchatBoardPdf from '../assets/topchatboard.pdf';


export default function Footer() {
  return (
    <section className='container work' id='work'>
        <div className='clearfix mb4' id='topchat'>
            <div className='col sm-col-12 md-col-12 lg-col-12'>
                <div className="work-desc-wrap">
                    <h2>Topchat: Tokopedia Chat Feature</h2>            
                    <p className='work-desc'>Topchat was a chatting platform that improve the inbox message Tokopedia Modules. This project actually born in Tokopedia's internal Hackathon Challenge. Me and my team mates had an idea to improve our chatting experience by build the new chat platform that separate every context messaging into a different threads and the goal is that every seller and buyers can chat across Tokopedia's platform through Desktop and Apps Platform. We manage to build this and the development process still continue up until now to reach the goals that sellers and buyers can do transaction / checkout process inside the threads. <br /> The design process pretty complex because total there are 12 State in this feature and me with my <a href='https://www.linkedin.com/in/alvin-liauw-a7799465/' target='_blank'>colleague</a>. </p>
                    <a href='https://www.tokopedia.com/' target='_blank' className='mb4'>Visit site</a>
                </div>
            </div>
            <div className='col sm-col-12 md-col-12 lg-col-12 mt4'>
                <a href={TopchatBoardPdf} target='_blank'><img src={TopchatImgFull} className='work-img' id='largeImage' alt='' /></a>
            </div>
        </div>
    </section>
  );
}
