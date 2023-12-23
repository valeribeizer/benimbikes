import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="logo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto" style={{ gap: '50px' }}>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#services">Our services</Nav.Link>
            <Nav.Link href="#contacts">Contacts</Nav.Link>
            <Nav.Link href="#prices">Prices</Nav.Link>
          </Nav>
          <Button>Contact us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
