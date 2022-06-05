import React from "react";
import Image from "next/image";
import Logo from "../images/jiil-tech.jpg";

function Header() {
  return (
    <header className="  h-fit grid grid-cols-3 w-full items-center space-x-5">
      {/* left  */}
      <div className="w-5/5 h-full  p-8  ">
        <ul className="flex space-x-9 h-full items-center font-semibold">
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </div>
      {/* middle */}
      <div className="relative  h-full w-5/5  cursor-pointer place-items-center">
        <div className="flex justify-center">

        <Image src={Logo} objecFit="contain" width="150%" height="100%" />
        </div>
      </div>

      {/* right */}
      <div className="w-5/5 h-full  items-center space-x-5 flex  ">
        <div className="flex w-full justify-around">

          <p className="text-orange-600 font-semibold text-xl items-center flex">00213 696 427 930 </p>
          <p className="border border-solid border-orange-600 
          font-semibold uppercase px-6 py-2 text-orange-600 text-xl">Let's talk</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
