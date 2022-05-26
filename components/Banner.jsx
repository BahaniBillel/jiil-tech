import React from 'react';
import Image from 'next/image';
import homeBanner from '../images/homeBanner.jpg';

function Banner() {
  return (
    <div className=" w-full">
      <Image
        src={homeBanner}
        alt="/"
        className="object-cover h-full w-full"
        priority
      />
    </div>
  );
}

export default Banner;
