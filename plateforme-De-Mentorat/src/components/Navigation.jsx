// src/components/Header.jsx

import { Link } from "react-router-dom";

import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" ">
      <div className="flex justify-between items-center w-full px-5 border-b-2 border-[#e7e7e7] fixed top-0 z-10 bg-white">
        <Link to="/">
          <img className="w-32" src="src\assets\img\Logos\ingoude.png" alt="" />
        </Link>
        {/* Bouton de menu hamburger */}
        <button
          className="block lg:hidden text-black  focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2H3zm0 8a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2H3zm0 8a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2H3z"
            />
          </svg>
        </button>
      </div>

      <header
        className={`lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex items-center justify-between px-5 border-b-2 border-[#e7e7e7] w-full fixed top-0 z-10  bg-white">
          <Link to="/">
            <img
              className="w-32"
              src="src\assets\img\Logos\ingoude.png"
              alt=""
            />
          </Link>
          <ul className="flex gap-[20px] items-center justify-between p">
            <li className="border border-blue-500 rounded-sm px-[25px] py-[3px] hover:bg-blue-600 hover:text-white text-blue-600">
              <Link to="/singUpMentoré">Etudiant</Link>
            </li>
            <li className="border border-blue-500 rounded-sm px-[25px] py-[3px]  hover:bg-blue-600 hover:text-white text-blue-600">
              <Link to="/singUpMentor">Mentor</Link>
            </li>
            <li className=" border-blue-500 rounded-sm px-[25px] py-[3px] text-blue-600  hover:bg-[#fef5bd] hover:text-black bg-[#FFDF00]">
              <Link to="/login">{"Se connecter | S'inscrire"}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
};

export default Navigation;
