import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import "./Nav.scss";
import Resources from '../Resources/Resources.js'

const Nav = () => {
  return (
    <>
       <Router>
      <ul className="nav-link-container">
        <Link className="nav-link-container__about" to="/about">
          About
        </Link>
        <NavLink to="/resources"className="nav-link-container__resources" >
          Resources
        </NavLink>
        <Link className="nav-link-container__contact" to="/contact">
          Contact
        </Link>
      </ul>
      </Router>
    </>
  );
};

export default Nav;
