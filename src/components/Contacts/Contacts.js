import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="container"
      style={{
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <AnimatedOnScroll
        animationIn="fadeInUp"
        style={{
          animationDuration: "5000ms",
        }}
      >
        <h2>Contacts</h2>
        <div className="infoContactsContainer">
          <div className="phoneEmailContainer">
            <p>ben@benimbikes.se</p>
            <p>+ 46 73 600 50 56</p>
          </div>
          <p>
            As a unique bike brand based in Stockholm, we are excited to offer
            our services and products to the community. While we may not have a
            physical store, we are still available to assist you with all your
            biking needs.
            <br />
            <br /> We look forward to hearing from you!
          </p>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Contacts;
