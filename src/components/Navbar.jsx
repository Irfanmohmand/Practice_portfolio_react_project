import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar text-white font-bold p-4">
      <div className="container mx-auto flex justify-between items-center" data-aos="fade-down" data-aos-duration='1000'>
        {/* Left Side (Logo + Nav Links in One Line) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <div className="logo text-xl">
            <a href="#">Portfolio</a>
          </div>

          {/* Menu Button (Visible on Small Screens) */}
          <button
            className="block md:hidden text-white ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Navigation Links (Flex Row on Desktop, Column on Mobile) */}
        <div
          className={`md:flex gap-10 transition-all duration-300 ${isOpen ? "flex flex-col absolute top-16 left-0 w-full bg-zinc-900 p-6" : "hidden md:flex"
            }`}
        >
          <a href="#" className="hover:border-b-2 border-yellow-300">Home</a>
          <a href="#" className="hover:border-b-2 border-yellow-300">Experience</a>
          <a href="#" className="hover:border-b-2 border-yellow-300">Skills</a>
          <a href="#" className="hover:border-b-2 border-yellow-300">Projects</a>
          <a href="#" className="hover:border-b-2 border-yellow-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
