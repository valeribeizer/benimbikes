import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <AnimatedOnScroll
      animationIn="fadeInUp"
      style={{
        animationDuration: "5000ms",
      }}
    >
      <div
        className="container footer"
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {window.innerWidth > 600 ? (
          <Navbar.Brand href="#home">
            <img src="logo.png" alt="logo" />
          </Navbar.Brand>
        ) : (
          ""
        )}
        <p>ben@benimbikes.se</p>
        <div className="iconsContainerFooter">
          <a href="https://www.instagram.com/benimbikes/">
            <img className="main_icons" src="insta_icon.png" alt="insta" />
          </a>
          <a href="https://wa.me/46736005056">
            <img
              className="main_icons"
              src="whatsapp_icon.png"
              alt="whatsapp"
            />
          </a>
        </div>
      </div>
      <p className="p-footer">
        {currentYear}. All rights reserved | Designed and built with 🖤 by
        Valeryia Beizer
      </p>
    </AnimatedOnScroll>
  );
};

export default Footer;
