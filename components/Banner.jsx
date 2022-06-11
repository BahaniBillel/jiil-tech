import React from "react";
import Image from "next/image";
import homeBanner from "../images/webDev.jpg";
import Header from "./Header";
import UpperHeader from "./UpperHeader";

function Banner() {
  return (
    <div className=" relative w-screen h-[100vh] bg-slate-200 lg:h-[100vh] md:h-[80vh]">
      <UpperHeader />
      <Header/>
    </div>
  );
}

export default Banner;
