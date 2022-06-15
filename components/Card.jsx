import Image from 'next/image';
import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card({ image1, image2, image3, image4, image5, image6 }) {
  const settings = {
    dots: false,
    fade: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };

  return (
    <div
      className=" h-fit w-full border relative cursor-pointer p-3 bg-white overflow-hidden 
                    hover:scale-105 transition ease-out duration-150 hover:shadow-md rounded-md"
    >
      <Slider {...settings}>
        {image1 && (
          <div className=" relative overflow-hidden h-72 w-96">
            <Image
              src={image1}
              alt="/"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        )}
        {image2 && (
          <div className="relative overflow-hidden h-72 w-96">
            <Image src={image2} alt="/" layout="fill" objectFit="cover" />
          </div>
        )}

        {image3 && (
          <div className="relative overflow-hidden h-72 w-96">
            <Image src={image3} alt="/" layout="fill" objectFit="cover" />
          </div>
        )}
        {image4 && (
          <div className="relative overflow-hidden h-72 w-96">
            <Image src={image4} alt="/" layout="fill" objectFit="cover" />
          </div>
        )}

        {image5 && (
          <div className="relative overflow-hidden h-72 w-96">
            <Image src={image5} alt="/" layout="fill" objectFit="cover" />
          </div>
        )}
        {image6 && (
          <div className="relative overflow-hidden h-72 w-96">
            <Image src={image6} alt="/" layout="fill" objectFit="cover" />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default Card;
