import React from "react";
import "./style.css";

const About = () => {
  return (
    <div
      id="about"
      className="container"
      style={{ flexDirection: "column", marginRight: "0", marginTop: "40px" }}
    >
      <h2>About us</h2>
      <div className="aboutInfoContainer">
        <p>
          We are passionate about making a difference in the world, and we
          donate a portion of our profits to organizations that promote peace,
          love, and environmental conservation. By choosing Benimbikes, you are
          not only getting a great bike but also contributing to a better world.
          <br />
          <br /> Join us in spreading peace, love, and bikes. Together, we can
          make a positive impact and create a more harmonious world.
        </p>
        <img className="bike_chain_img" src="bike_chain.png" alt="bike_chain" />
      </div>
    </div>
  );
};

export default About;
