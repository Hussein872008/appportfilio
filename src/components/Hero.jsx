import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from "../assets/images/1.svg";
import image2 from "../assets/images/2.svg";
import image3 from "../assets/images/3.svg";
import image4 from "../assets/images/4.svg";
import image5 from "../assets/images/5.png";

const Hero = () => {
  return (
    <section className="bannar">
      <Container>
        <Row className="align-items-center">
          <Col md={7} sm={12} className="bannartext">
            <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
            <h1>Aisha Tarek Portfolio.</h1>
            <h5>We build marketing websites that help you sell on autopilot.</h5>
            <Button variant="danger" className="custom-btn">Let's talk</Button>
          </Col>
          <Col md={5} sm={12} className="bannarimgs">
            <img src={image1} alt="" className="waves" />
            <img src={image5} alt="" className="laptop" />
            <div className="imgbox gimg">
              <img src={image4} alt="" />
            </div>
            <div className="imgbox uimg">
              <img src={image3} alt="" />
            </div>
            <div className="imgbox wimg">
              <img src={image2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
