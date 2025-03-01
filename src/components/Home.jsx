import React from 'react';
import hero from "./data/hero.json";
import pdf from "../pdf/resume-2.pdf";
import "../css/home.css";


function Home() {
  return (
    <div className="home-section mt-40">
      <div className="home-boxes  w-full h-full grid md:grid-cols-2 grid-cols-1 place-items-center text-center p-6 gap-6">

        {/* Left Side */}
        <div className="left-side flex flex-col items-center md:items-start text-center md:text-left w-full max-w-[500px]">
          <h2 data-aos='fade-right' data-aos-duration='1000' className="lg:font-bold text-white font-medium lg:text-[1.5rem] md:text-[1.5rem] text-[1.1rem] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, animi.
          </h2>
          <a
            href={pdf}
            download="Resume.pdf"
            className="px-4 py-2 my-2 border border-yellow-300 rounded-lg hover:bg-yellow-300 cursor-pointer text-yellow-300 hover:text-black duration-200 font-medium inline-block"
          >
            Download Resume
          </a>
        </div>

        {/* Right Side */}
        <div data-aos='fade-left' className="right-side flex justify-center md:justify-start">
          <img id='imgColor'
            src={`/assets/${hero.imageSrc}`}
            alt="hero.image"
            className="w-[250px] border-5  h-[250px] md:w-[300px] md:h-[300px] rounded-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
