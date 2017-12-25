import React from 'react';
import { object } from 'prop-types';


export default function Hero({ data }) {
  return (
    <section className="container hero clearfix" id="hero">
      <div className="hero-headtagline">{data.heroTitle}</div>
      <p>{data.heroTagline}</p>
    </section>
  );
}

Hero.propTypes = {
  data: object.isRequired,
};
