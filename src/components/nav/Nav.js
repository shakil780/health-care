import React, { useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import useAuth from "../../hooks/useAuth";

const MyNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const toggle = () => setIsOpen(!isOpen);
  let history = useHistory();
  const handleClick = () => {
    history.push("/login");
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <Link className="navbar-brand" to="/">
            Health Care
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/doctors">
                  Doctors
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavItem>
            {user?.email ? (
              <div class="text-white">
                <span>{user?.displayName || user?.email}</span>
                <button onClick={logOut} className="btn btn-danger mx-2">
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={handleClick}
                className="btn btn-default text-white"
              >
                Login
              </button>
            )}
          </NavItem>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
