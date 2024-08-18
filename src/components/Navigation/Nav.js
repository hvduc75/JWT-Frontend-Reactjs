import React from "react";
import "./Nav.scss"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div class="topnav">
        <Link class="active" to="/home">
          Home
        </Link>
        <Link to="/news">News</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Nav;
