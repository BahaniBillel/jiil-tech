import React, { useState } from 'react';
// import {} "@heroicons/react/solid"
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaDribbble } from 'react-icons/fa';
import ImageBanner from '../images/webDev.jpg';
import ContactForm from './ContactForm';

function Header() {
  const [contacForm, setContactForm] = useState(false);
  const ShowContactForm = () => {
    setContactForm(true);
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
          <ul className="flex items-center space-x-10 text-xs text-gray-600 ">
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
        </div>
      </div>
      <div className="flex mt-10 w-3/5 h-[500px] bg-zinc-500 items-center relative overflow-hidden">
        <div className="relative w-8/12 h-full ">
          <Image src={ImageBanner} />
        </div>
        <div className="p-5 bg-teal-100 w-4/12 h-full">text content</div>
      </div>
      {contacForm ? <ContactForm /> : null}
    </header>
  );
}

// https://www.sitebuilderreport.com/inspiration/web-developer-designer-portfolios

export default Header;
