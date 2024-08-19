import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import {  useLocation } from "react-router-dom";

function Nav() {
  const [isShow, setIsShow] = useState(true);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setIsShow(false);
    }
  }, []);
  return (
    <div>
      {isShow === true && (
        <div class="topnav">
          <Link to="/" exact>
            Home
          </Link>
          <Link to="/users">Users</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">about</Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
