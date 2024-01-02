import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const OurServices = () => {
  return (
    <div id="services" className="container services">
      <AnimatedOnScroll
        animationIn="fadeInUp"
        style={{
          animationDuration: "5000ms",
        }}
      >
        <h2>Our services</h2>
        <div className="ourServicesContainer">
          <img src="bike.png" alt="bike" />
          <div className="infoOurServices">
            <p>
              At Benimbikes, we offer a range of services to cater to your
              personal biking wants and needs. Whether you're looking for a
              vintage bike with character or a brand new bike with the latest
              features, we can scout and find the perfect bike for you. Our team
              is experienced in locating unique and high-quality bikes that
              match your preferences.
              <br />
              <br />
              In addition to our bike scouting services, we also offer:
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Reparations</Accordion.Header>
                <Accordion.Body>
                  In addition to our bike scouting services, we also offer
                  comprehensive bike repair services. Our skilled technicians
                  are equipped to handle all kinds of bike repairs, ensuring
                  that your bike is in optimal condition for a smooth and
                  enjoyable ride.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Restorations</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Custom made parts</Accordion.Header>
                <Accordion.Body>
                  We also specialize in creating custom parts made of recycled
                  steel, allowing you to personalize your bike while promoting
                  sustainability. Our products are built to last, ensuring that
                  you can enjoy the peace and love of cycling for years to come.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Events</Accordion.Header>
                <Accordion.Body>
                  Furthermore, we organize events and community rides to bring
                  people together and create a sense of unity. We believe that
                  when people come together to ride bikes, they can build
                  connections, break down barriers, and promote understanding
                  and acceptance.
                  <br />
                  <br /> We are open to collaborations and partnerships with
                  organizations and schools that share our vision. Together, we
                  can create programs and events that promote cycling among
                  young people and provide them with opportunities to learn,
                  grow, and build community. If you are interested in partnering
                  with us or have ideas on how we can promote cycling among
                  young people, please feel free to reach out.
                  <br />
                  <br /> We look forward to working together to create a future
                  where young people can discover a new hobby, enjoy fresh air,
                  and build community.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default OurServices;
