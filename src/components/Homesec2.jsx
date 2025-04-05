import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from "../assets/images/1.svg";
import image6 from "../assets/images/6.svg";

const HomeSec2 = () => {
  return (
    <section className="homesec2">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <div className="secimgs">
              <img src={image1} alt="" className="waves" />
              <img src={image6} alt="" className="people" />
            </div>
          </Col>
          <Col md={6} sm={12} className="sec2text">
            <Button variant="outline-danger" className="custom-btn-2">The Dream</Button>
            <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSec2;
