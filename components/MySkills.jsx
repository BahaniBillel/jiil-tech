import React from 'react';
import SkillBar from './SkillBar';

import Title from './Title';

function MySkills() {
  return (
    <>
      <Title
        title="my skills"
        subTitle1="my domain"
        subTitle2="skills"
        description="the essentiel competancy you ever need to hire."
      />
      <div
        className="p-3 border rounded-md bg-violeta-600 w-3/5 h-screen flex flex-col lg:flex-row xl:flex-row 2xl:flex-row
                      items-center space-x-5  "
      >
        <div className="text-white border w-1/2 h-96 ">content</div>
        <div className="text-white border w-1/2 h-96 p-3 space-y-8">
          <SkillBar width="92" skill="UX/UI DESIGN" />
          <SkillBar width="50" skill="DIGITAL MARKETING" />
          <SkillBar width="80" skill="APP DEVELOPPMENT" />
        </div>
      </div>
    </>
  );
}

export default MySkills;
