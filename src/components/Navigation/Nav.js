import React, { useContext } from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Nav() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if ((user && user.isAuthenticated === true) || location.pathname === "/") {
    return (
      <div className="topnav">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">about</Link>
      </div>
    );
  } else {
    return;
  }
}

export default Nav;
