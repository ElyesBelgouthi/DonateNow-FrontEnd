import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navElements = {
  hidden: {
    y: -250,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 120,
    },
  },
};

const hoverElements = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300,
    },
  },
};

const MainNavigation = () => {
  return (
    <motion.header className="nav--header">
      <div className="logo--div">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <motion.ul variants={navElements} initial="hidden" animate="visible">
          <motion.li variants={hoverElements} whileHover="hover">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HOME
            </NavLink>
          </motion.li>
          <motion.li variants={hoverElements} whileHover="hover">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              ABOUT
            </NavLink>
          </motion.li>
          <motion.li variants={hoverElements} whileHover="hover">
            <NavLink
              to="collaborators"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              COLLABORATORS
            </NavLink>
          </motion.li>
          <motion.li variants={hoverElements} whileHover="hover">
            <NavLink
              to="/boycott"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              BOYCOTT
            </NavLink>
          </motion.li>
          <motion.li variants={hoverElements} whileHover="hover">
            <NavLink
              to="/donation"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              DONATION
            </NavLink>
          </motion.li>
        </motion.ul>
      </nav>
      <div className="ham--div">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </motion.header>
  );
};

export default MainNavigation;
