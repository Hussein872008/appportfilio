import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} alt="Logo" width="120" height="50" />
        </Navbar.Brand>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} smooth to="/#latest">Latest Builds</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#process">Process</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#process">Services</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#contact">Contact Us</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
