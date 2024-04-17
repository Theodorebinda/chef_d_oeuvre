// src/components/Header.jsx

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav className="flex items-center justify-between p-1 border-b-2 w-full fixed top-0 z-10  bg-white">
        <Link to="/">
          <img className="w-32" src="src\assets\img\Logos\ingoude.png" alt="" />
        </Link>
        <ul className="flex gap-[20px] items-center justify-between p">
          <li className="border border-blue-500 rounded-sm px-[25px] py-[3px] text-blue-600">
            <Link to="/singup">Etudiant</Link>
          </li>
          <li className="border border-blue-500 rounded-sm px-[25px] py-[3px] text-blue-600">
            <Link to="/singup">Mentor</Link>
          </li>
          <li className="border border-blue-500 rounded-sm px-[25px] py-[3px] text-blue-600 bg-[#FFDF00]">
            <Link to="/login">Se connecter|S inscrire</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
