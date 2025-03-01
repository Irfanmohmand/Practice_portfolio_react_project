import React from 'react';
import projects from "./data/project.json";

function Projects() {
  return (
    <>
      <div className="project-section w-full flex justify-center my-10">
        <div className="w-[80%] p-4 my-6">
          <h1 className='font-bold text-[2.5rem] text-white '>Projects</h1>
          <div className="projects-box flex gap-10 my-4 justify-center grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            {projects.map((data) => (
              <>
                <div key={data.key} className='border-2 border-white p-2 bg-blue-900 rounded-xl'>
                  <div className="imgBox flex justify-center">
                    <img src={`${data.imageSrc}`} alt="" className='rounded-xl' />
                  </div>
                  <div className="project-content text-center">
                    <h2> {data.title} </h2>
                    <h3> {data.description} </h3>
                  </div>
                  <div className="btns mt-4 flex justify-center">
                    <a href={data.demo} className='px-4 py-2 bg-yellow-400 mx-2'>Demo</a>
                    <a href={data.source} className='px-4 py-2 bg-yellow-400 mx-2'>Source</a>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects