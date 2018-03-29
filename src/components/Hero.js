import React from 'react';
import { object } from 'prop-types';
import resumePdf from '../assets/resume.pdf';


export default function Hero({ data }) {
  return (
    <section className="container hero clearfix" id="hero">
      <div className="hero-headtagline">{data.heroTitle}</div>
      <p>{data.heroTagline}</p>
      <div className="mt1"><a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-action">See my resume</a></div>
    </section>
  );
}

Hero.propTypes = {
  data: object.isRequired,
};
