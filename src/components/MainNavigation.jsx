import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  return (
    <header className="nav--header">
      <div className="logo--div">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="collaborators"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              COLLABORATORS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/boycott"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              BOYCOTT
            </NavLink>
          </li>
          <li>
            <a>PRODUCTS</a>
          </li>
        </ul>
      </nav>
      <div className="ham--div">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};

export default MainNavigation;
