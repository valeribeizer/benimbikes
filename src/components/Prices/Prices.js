import React, { useState } from "react";
import ContactModal from "../ContactModal/ContactModal";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { Button } from "react-bootstrap";
import "./style.css";

const Prices = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div id="prices" className="container prices">
      <AnimatedOnScroll
        animationIn="fadeInUp"
        style={{
          animationDuration: "5000ms",
        }}
      >
        <h2>Prices</h2>
        <div className="pricesContainer">
          <div className="infoPricesContainer">
            <p>
              Our prices will be competitive compared to other bike stores. We
              prioritize offering excellent value for our customers, ensuring
              that you get a high-quality service without breaking the bank. We
              look forward to providing you with pricing details according to
              your needs and budget. Contact us today to get started!
            </p>
            <Button onClick={() => setModalShow(true)}>
              Get a free consultation
            </Button>
          </div>
          <img src="prices.png" alt="prices" />
        </div>
        <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
      </AnimatedOnScroll>
    </div>
  );
};

export default Prices;
