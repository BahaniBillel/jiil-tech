import Image from "next/image";
import React from "react";
import ImageBanner from "../images/webDev.jpg";
import HoverVideoPlayer from "react-hover-video-player";
import Slider from "react-slick";
import webDev from "../images/webDev.jpg";
import tech from "../images/technology-01.jpg";
import homeBanner from "../images/homeBanner.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function WebDesign() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=" w-4/5 h-[90vh]  lg:w-3/5 xl:w-3/5 2xl:w-3/5 my-20">
      <p className="font-light text-gray-600 mb-10">
        WEB DESIGN , DIGITAL MARKETING & PROJECT MANAGEMENT
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  relative ">
        <div className=" h-72 w-full border relative  ">
          <Slider {...settings}>
            <div className=" relative overflow-hidden h-72 w-96 after:content-['Bargain'] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-slate-700 after:opacity-50">
              <Image
                src={tech}
                alt="/"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="relative overflow-hidden h-72 w-96">
              <Image src={webDev} alt="/" layout="fill" objectFit="cover" />
            </div>

            <div className="relative overflow-hidden h-72 w-96">
              <Image src={homeBanner} alt="/" layout="fill" objectFit="cover" />
            </div>
          </Slider>
        </div>
        <div className=" h-72 w-full border ">
          <div className=" relative overflow-hidden h-full w-96">2</div>
        </div>
      </div>
    </div>
  );
}

export default WebDesign;
