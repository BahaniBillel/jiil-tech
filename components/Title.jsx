import React from 'react';

function Title({ title, subTitle1, subTitle2, description }) {
  return (
    <div className="my-3 w-3/5">
      <div className="text-md my-5 tracking-wider text-violeta-600 font-medium uppercase">
        {title}
      </div>
      <div className="uppercase text-5xl font-normal pb-5 ">
        <span className=" border-b-2 border-b-gray-400 mr-2 ">{subTitle1}</span>
        <span className="  ">{subTitle2}</span>
      </div>
      <p className="font-light text-gray-600 mb-10 uppercase">{description}</p>
    </div>
  );
}

export default Title;
