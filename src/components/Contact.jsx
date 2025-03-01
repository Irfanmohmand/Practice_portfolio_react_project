import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="contact-section w-full mt-10 flex justify-center">
        <div className="w-[70%] h-[60%] my-6">
          <h1 className='text-[2.5rem] text-white font-bold '>Contact Us</h1>
          <div className="contact-icons gap-6 text-white text-[2rem] my-10 flex justify-center">
            <div className="github border-2 border-white bg-black rounded-full p-2">
              <a href="https://github.com/Irfanmohmand"><FaGithub /></a>
            </div>
            <div className="github border-2 border-white bg-black rounded-full p-2">
              <a href="https://www.facebook.com/sunny.irfan.79"><FaFacebook /></a>
            </div>
            <div className="github border-2 border-white bg-black rounded-full p-2">
              <a href="https://www.linkedin.com/in/irfan-mohmand/"><FaLinkedin /></a>
            </div>
            <div className="github border-2 border-white bg-black rounded-full p-2">
              <a href="mailto:irfanmohmand987@gmail.com"><SiGmail /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact