import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";

const Prices = () => {
  return (
    <div
      id="prices"
      className="container"
      style={{ flexDirection: "column", marginTop: "40px", marginRight: "0", paddingRight: "0" }}
    >
      <h2>Prices</h2>
      <div className="pricesContainer">
        <div className="infoPricesContainer">
          <p>
            Our prices will be competitive compared to other bike stores. We
            prioritize offering excellent value for our customers, ensuring that
            you get a high-quality service without breaking the bank. We look
            forward to providing you with pricing details according to your
            needs and budget. Contact us today to get started!
          </p>
          <Button>Get a free consultation</Button>
        </div>
        <img src="prices.png" alt="prices" />
      </div>
    </div>
  );
};

export default Prices;
