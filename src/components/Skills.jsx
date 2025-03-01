import React from 'react';
import skills from "./data/skills.json";

function Skills() {
  return (
    <>
      <div id='skills' className="skills-section w-full min-h-[80vh] flex p-6 justify-center">
        <div className="skills-content w-[90%] p-6 rounded-lg flex items-center flex-col">
          <h1 className="text-left w-full text-[2.5rem] px-20 text-white font-bold mb-6">Skills</h1>

          {/* Grid Container for Responsive Layout */}
          <div className="skills-boxes lg:w-[60%] md:w-[60%] w-[100%] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {skills.map((data) => (
              <div key={data.id} className="boxes flex flex-col items-center bg-zinc-900 text-white  p-4 rounded-lg shadow-lg">
                <img src={`/assets/${data.imagSrc}`} alt={data.title} className="w-14 h-14 mb-2" />
                <h4 className="text-lg font-medium">{data.title}</h4>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default Skills;
