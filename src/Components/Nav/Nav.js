import React from "react";
import About from '../About/About'
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
       <Switch>
      <ul className="nav-link-container">
        <NavLink to="/about" className="nav-link-container__about">
          About
        </NavLink>
        <NavLink to="/resources"className="nav-link-container__resources" >
          Resources
        </NavLink>
        <Link className="nav-link-container__contact" to="/contact">
          Contact
        </Link>
      </ul>
      </Switch>

      {/* <Switch>
        <Route exact path="/">

        </Route> */}
        {/* <Route path="/about">
        <About/>
        </Route> */}
        {/* <Route path="/resources">
        <Resources/>
        </Route>
      </Switch> */}
    </>
  );
};

export default Nav;
