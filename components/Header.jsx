import React, { useState } from 'react';
// import {} "@heroicons/react/solid"
import Image from 'next/image';
import {
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaHamburger,
} from 'react-icons/fa';
import ImageBanner from '../images/webDev.jpg';
import ContactForm from './ContactForm';

function Header() {
  const [mobileView, setMobileView] = useState(false);
  const ShowContactForm = () => {
    setMobileView(true);
  };
  return (
    <header className=" flex flex-col items-center justify-center   ">
      <div className="border px-10 py-5 text-2xl my-16">-BAHANI BILLEL-</div>

      <div className="flex items-center justify-between w-3/5">
        <div className="flex space-x-7">
          <FaFacebook className="text-gray-600 cursor-pointer" />
          <FaDribbble className="text-gray-600 cursor-pointer" />
          <FaInstagram className="text-gray-600 cursor-pointer" />
        </div>
        <div>
          {mobileView ? (
            <FaHamburger />
          ) : (
            <ul className="hidden lg:flex xl:flex items-center space-x-10 text-xs text-gray-600 ">
              <li className="cursor-pointer border-solid border-b-2  pb-3 border-gray-400 ">
                HOME
              </li>
              <li className="cursor-pointer pb-3">BIO</li>
              <li className="cursor-pointer pb-3">WEB DESIGN</li>
              <li className="cursor-pointer pb-3 ">PROJECT MANAGEMENT</li>
              <li className="cursor-pointer pb-3" onClick={ShowContactForm}>
                CONTACT
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-col w-4/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 h-[90vh] sm:h-[90vh] lg:h-[500px] xl:h-[500px] 2xl:h-[500px]  xl:flex-row lg:flex-row 2xl:flex-row overflow-hidden my-5 ">
        <div className=" w-full  h-3/6  lg:h-full bg-violeta-400 lg:w-4/6 relative">
          <Image src={ImageBanner} layout="fill" objectFit="cover" />
        </div>
        <div className=" bg-rose-200 w-full h-3/6 lg:h-full lg:w-2/6 p-10 flex flex-col items-center space-y-5 lg:space-y-10 place-content-center ">
          <p className="text-gray-600 text-lg font-light">
            PROFILE: BAHANI BILLEL
          </p>
          <div className="text-center flex flex-col space-y-3 lg:space-y-7 text-gray-600 text-lg items-center font-light">
            <p>
              A Digital Project Manager offering and web designer offeringf
              seamless experiences for you and the users og your websites.
            </p>
            <button className="px-1 py-3 shadow-md hover:scale-90 transition duration-200 bg-violeta-400 w-40 text-slate-300 font-semibold text-sm">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// https://www.sitebuilderreport.com/inspiration/web-developer-designer-portfolios

export default Header;
