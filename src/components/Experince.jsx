import React from 'react';
import experience from "./data/experience.json";

function Experience() {
  return (
    <>
      <div className="experience-section flex justify-center p-6">
        <div className="experience-content mt-10 w-full max-w-[900px]">
          <h1 className='font-bold text-white text-3xl mb-6'>Experience</h1>

          {experience.map((data) => (
            <div key={data.id}
              className="experience-boxes bg-blue-900 border-2 border-red-400 rounded-2xl mt-6 flex flex-col md:flex-row justify-between items-center p-4 w-full" data-aos='flip-up'>

              {/* Left: Image */}
              <div className="left flex justify-center">
                <img src={`/assets/${data.imageSrc}`} alt="" className="w-32 h-32 md:w-40 md:h-40 rounded-lg" />
              </div>

              {/* Right: Text */}
              <div className="right text-center md:text-left md:ml-6 flex-1">
                <h1 className="text-2xl text-white font-semibold">{data.role}</h1>
                <h3 className="text-lg text-yellow-400">
                  <span className="block md:inline">{data.startDate} - {data.endDate}</span>
                  {" "} <span className="block md:inline text-yellow-500">{data.location}</span>
                </h3>
                <h5 className="text-yellow-400 mt-2">{data.experiences[0]}</h5>
                <h5 className="text-yellow-400">{data.experiences[1]}</h5>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
