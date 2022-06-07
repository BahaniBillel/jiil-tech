import React from 'react';
import Image from 'next/image';
import homeBanner from '../images/technology-01.jpg';
import Header from './Header';

function Banner() {
  return (
    <div className=" relative w-screen bg-red-500 h-[50vh] sm:h-[60vh] xl:h-[80vh] ">
      <Header />
      <Image
        src={homeBanner}
        alt="/"
        priority
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
