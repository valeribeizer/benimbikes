import React from "react";
import "./style.css";

const HomeScreen = () => {
  return (
    <div className="container">
      <div className="iconsContainer">
        <a href="https://www.instagram.com/benimbikes/">
          <img className="main_icons" src="insta_icon.png" alt="insta" />
        </a>
        <a href="https://wa.me/46736005056">
          <img className="main_icons" src="whatsapp_icon.png" alt="whatsapp" />
        </a>
      </div>
      <div className="mainInfoContainer">
        <img className="main_photo" src="main_photo.png" alt="main_photo" />
        <p className="main_p">
          Benimbikes is a brand that promotes peace, love, and bikes. We believe
          that riding a bike not only brings joy and freedom but also promotes a
          sense of peace and harmony with nature. Our mission is to inspire
          people to embrace the bike culture and spread love and positivity
          through cycling.
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
