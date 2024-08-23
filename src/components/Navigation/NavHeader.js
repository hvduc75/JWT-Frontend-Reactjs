import React, { useContext } from "react";
import "./Nav.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo192.png";
import { logoutUser } from "../../services/userService";
import { toast } from "react-toastify";

function NavHeader() {
  const { user, logoutContext } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    let data = await logoutUser(); // clear cookies
    localStorage.removeItem("jwt"); // clear local storage
    logoutContext(); // clear user in context

    if (data && +data.EC === 0) {
      toast.success("Log out succeeds ...");
      navigate("/login");
    } else {
      toast.error(data.EM);
    }
  };

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
                {user && user.isAuthenticated === true ? (
                  <>
                    <Nav.Item className="nav-link">
                      Welcome {user.account.username}!
                    </Nav.Item>
                    <NavDropdown title="Settings" id="basic-nav-dropdown">
                      <NavDropdown.Item>Change Password</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <span onClick={handleLogout}>Log out</span>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <Link to="/login" className="nav-link">
                    Login!
                  </Link>
                )}
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
