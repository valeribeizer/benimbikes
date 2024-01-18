import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const About = () => {
  return (
    <div
      id="about"
      className="container"
      style={{ flexDirection: "column", marginRight: "0", marginTop: "40px" }}
    >
      <AnimatedOnScroll
        animationIn="fadeInUp"
        style={{
          animationDuration: "8000ms",
        }}
      >
        <h2>About us</h2>
        <div className="aboutInfoContainer">
          <p>
            Benimbikes is a small family business located in Stockholm,
            Hägersten. We are passionate about bikes and dedicated to providing
            high-quality products and services to our customers.
            <br />
            <br />
            As a small family business, we take pride in our personalized
            approach and attention to detail. We believe in building strong
            relationships with our customers and providing them with the best
            possible experience. When you choose Benimbikes, you can expect
            friendly and knowledgeable service from our team.
            <br />
            <br /> We are passionate
            about making a difference in the world, and we donate a portion of
            our profits to organizations that promote peace, love, and
            environmental conservation. By choosing Benimbikes, you are not only
            getting a great bike but also contributing to a better world.
            <br />
            <br /> Join us in spreading peace, love, and bikes. Together, we can
            make a positive impact and create a more harmonious world.
          </p>
          <img
            className="bike_chain_img"
            src="bike_chain.png"
            alt="bike_chain"
          />
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default About;
