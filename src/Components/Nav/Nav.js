import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <>
      <ul className="nav-link-container">
        <Link className="nav-link-container__about" to="/about">
          About
        </Link>
        <Link className="nav-link-container__resources" to="/resources">
          Resources
        </Link>
        <Link className="nav-link-container__contact" to="/contact">
          Contact
        </Link>
      </ul>
    </>
  );
};

export default Nav;
