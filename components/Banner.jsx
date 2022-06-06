import React from 'react';
import Image from 'next/image';
import homeBanner from '../images/technology-01.jpg';
import Header from './Header';

function Banner() {
  return (
    <div className=" w-screen bg-red-500 ">
      <Header />
      <Image src={homeBanner} alt="/" priority />
    </div>
  );
}

export default Banner;
