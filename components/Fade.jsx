import React, { Component } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';
import webDev from '../images/webDev.jpg';
import tech from '../images/technology-01.jpg';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          <div>
            <Image src={webDev} alt="/" />
          </div>
          <div>
            <Image src={tech} alt="/" />
          </div>
        </Slider>
      </div>
    );
  }
}
