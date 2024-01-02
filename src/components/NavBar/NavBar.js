import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Button } from "react-bootstrap";
import ContactModal from "../ContactModal/ContactModal";

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleCollapse = () => {
    var nav = document.getElementById("basic-navbar-nav");
    nav.classList.remove("show");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo.png" alt="logo" style={{ width: "80%" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#about" onClick={handleCollapse}>
              About us
            </Nav.Link>
            <Nav.Link href="#services" onClick={handleCollapse}>
              Our services
            </Nav.Link>
            <Nav.Link href="#contacts" onClick={handleCollapse}>
              Contacts
            </Nav.Link>
            <Nav.Link href="#prices" onClick={handleCollapse}>
              Prices
            </Nav.Link>
          </Nav>
          <Button onClick={() => setModalShow(true)}>Contact us</Button>
        </Navbar.Collapse>
      </Container>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default NavBar;
