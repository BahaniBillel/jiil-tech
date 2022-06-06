import React from 'react';
import Image from 'next/image';
import Logo from '../images/logo-transp.png';

function Header() {
  return (
    <header className=" fixed z-50 h-fit grid grid-cols-3 w-full items-center space-x-5 px-60">
      {/* left  */}
      <div className="w-5/5 h-full  p-8  ">
        <ul className="flex space-x-20 h-full items-center font-bold text-xl text-white tracking-wider">
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
          <Image src={Logo} objecFit="contain" width="120%" height="120%" />
        </div>
      </div>

      {/* right */}
      <div className="w-5/5 h-full  items-center m-0 flex   ">
        <div className="flex w-full justify-around items-center">
          <p className="text-white font-semibold text-xl items-center tracking-wide">
            00213-696-427-930{' '}
          </p>
          <p
            className="border border-solid border-white 
          font-semibold uppercase px-6 py-2  text-xl text-white"
          >
            Let's talk
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
