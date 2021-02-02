import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h1>Nav</h1>

      <ul>
        <Link to="/about">About</Link>
        <Link to="/resoures">Resources</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </>
  );
};

export default Nav;
