import React, { useContext } from "react";
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo192.png"

function NavHeader() {
  const { user } = useContext(UserContext);
  const location = useLocation();

  if ((user && user.isAuthenticated === true) || location.pathname === "/") {
    return (
      <div className="nav-header">
        <Navbar expand="lg" bg="header" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width={30}
                height={30}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <span className="brand-name">React</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/users" className="nav-link">
                  Users
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </Nav>
              <Nav>
                <Nav.Item className="nav-link">Welcome HVD75!</Nav.Item>
                <NavDropdown title="Settings" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    return <></>;
  }
}

export default NavHeader;
