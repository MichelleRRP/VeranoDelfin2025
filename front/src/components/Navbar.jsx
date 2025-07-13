import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#home" className="cursor-pointer hover:text-gray-400">HOME</a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">ABOUT</a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">PROJECTS</a>
          <a href="#testimonials" className="cursor-pointer hover:text-gray-400">TESTIMONIALS</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">SIGN UP</button>

        {/* Icono hamburguesa */}
        <Bars3Icon 
          className="md:hidden w-7 text-black cursor-pointer" 
          onClick={() => setMobileMenu(true)}
        />
      </div>

      {/* MENU PARA MOVILES */}
      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 bg-white z-20 
          transform transition-transform duration-300
          ${showMobileMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <XMarkIcon className="w-6" onClick={() => setMobileMenu(false)} />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-bold">
          <a href="#home" className="px-4 py-2 rounded-full inline-block">HOME</a>
          <a href="#about" className="px-4 py-2 rounded-full inline-block">ABOUT</a>
          <a href="#projects" className="px-4 py-2 rounded-full inline-block">PROJECTS</a>
          <a href="#testimonials" className="px-4 py-2 rounded-full inline-block">TESTIMONIALS</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
