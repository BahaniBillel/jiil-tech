import React from 'react';

function SkillBar({ skill, width }) {
  
  return (
    <div>
      <div className="w-full h-10 ">
        <div className="flex flex-row w-11/12">
          <span className="text-lg text-white flex-grow uppercase">
            {skill}
          </span>
          <span className="text-lg text-white">{width}%</span>
        </div>
        <div className=" bg-[rgba(255,255,255,.5)] rounded-md w-11/12 h-2 mt-4 overflow-hidden flex flex-row items-start relative">
          <div 
          // className={`bg-white w-[${WidthLength}]  h-full rounded-md`} 
          style={{backgroundColor:'#fff', width:`${width|| 0}%`,height:"100%"}}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillBar;
