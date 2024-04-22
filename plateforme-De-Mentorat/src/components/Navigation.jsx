// src/components/Header.jsx

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav className="flex items-center justify-between px-5 border-b-2 border-[#e7e7e7] w-full fixed top-0 z-10  bg-white">
        <Link to="/">
          <img className="w-32" src="src\assets\img\Logos\ingoude.png" alt="" />
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
  );
}

export default Navigation;
