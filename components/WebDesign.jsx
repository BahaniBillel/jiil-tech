import React from 'react';

// images
import webDev from '../images/webDev.jpg';
import tech from '../images/technology-01.jpg';
import homeBanner from '../images/homeBanner.jpg';
import Card from './Card';

import marbre01 from '../images/marbre-image01.JPG';
import marbre02 from '../images/marbre-image02.JPG';
import marbre03 from '../images/marbre-image03.JPG';
import marbre04 from '../images/marbre-image04.JPG';
import marbre05 from '../images/marbre-image05.JPG';
import marbre06 from '../images/marbre-image06.JPG';

function WebDesign() {
  return (
    <div className=" w-4/5 h-[90vh]  lg:w-3/5 xl:w-3/5 2xl:w-3/5 my-20">
      <p className="font-light text-gray-600 mb-10">
        WEB DESIGN , DIGITAL MARKETING & PROJECT MANAGEMENT
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  relative ">
        <Card
          image1={marbre01}
          image2={marbre02}
          image3={marbre03}
          image4={marbre04}
          image5={marbre05}
          image6={marbre06}
        />
        <Card image1={webDev} image2={tech} image3={homeBanner} />
        <Card image1={webDev} image2={tech} image3={homeBanner} />
        <Card image1={webDev} image2={tech} image3={homeBanner} />
      </div>
    </div>
  );
}

export default WebDesign;
