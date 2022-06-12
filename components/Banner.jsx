import React from "react";
import Image from "next/image";
import homeBanner from "../images/webDev.jpg";
import Header from "./Header";
import UpperHeader from "./UpperHeader";

function Banner() {
  return (
    <div className=" relative w-screen  bg-slate-200 ">
      <UpperHeader />
      <Header/>
    </div>
  );
}

export default Banner;
