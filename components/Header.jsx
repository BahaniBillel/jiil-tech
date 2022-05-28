import React from "react";
import Image from "next/image";
import Logo from "../images/jiil-tech.jpg";

function Header() {
  return (
    <header className="  h-fit grid grid-cols-3  w-full items-center space-x-5">
      {/* left  */}
      <div className="w-5/5 h-full  p-8 ">
        <ul className="flex space-x-9 items-center font-semibold">
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
      <div className="relative flex items-center h-full w-1/5  cursor-pointer justify-center">
        <Image src={Logo} objecFit="contain" />
      </div>

      {/* right */}
      <div className="w-5/5 h-full  items-center space-x-5 flex  ">
          <p className="text-orange-600 font-semibold text-xl">00213 696 427 930 </p>
          <p className="border border-solid border-orange-600 
          font-semibold uppercase px-6 py-2 text-orange-600 text-xl">Let's talk</p>
      </div>
    </header>
  );
}

export default Header;
