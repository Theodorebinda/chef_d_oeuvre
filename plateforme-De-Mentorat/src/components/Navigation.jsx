// src/components/Header.jsx

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <nav className="flex">
        <Link to="/">
          <img
            className=""
            src="src\assets\img\Logos\LOGO-DEMA1N-CARRE (1).png"
            alt=""
          />
        </Link>
        <ul className="flex ">
          <li>
            <Link to="/singup">Etudiant</Link>
          </li>
          <li>
            <Link to="/singup">Mentor</Link>
          </li>
          <li>
            <Link to="/login">Se connecter|S inscrire</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
