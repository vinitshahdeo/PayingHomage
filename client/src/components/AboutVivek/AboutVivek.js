import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VivekPic from "../../assets/vivek.jpg";

const VivImg = styled.img`
  max-width: 100%;
  margin: 75px 0;
  border-radius: 75px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const VivAbout = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 75px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const AboutVivek = () => {
  return (
    <Row className="align-items-stretch">
      <Col md={6}>
        <VivImg src={VivekPic} alt="Vivek Actor" />
      </Col>
      <Col md={6} className="d-flex align-items-stretch">
        <VivAbout className="d-flex justify-content-center">
          <div className="text">
            <h2>About Dr. Vivekh</h2>
            <p>
              Vivekanandan, better known as Vivekh, Indian film actor, comedian,
              Television personality, playback singer and versatile social
              activist working for the Tamil film industry.
            </p>
            <p>
              Introduced in films by the legendary Director late. Shri. K. Bala
              Chander.
            </p>
            <p>
              In 2009, Government of India awarded with the prestigious Padma
              Shri award for his contribution to the arts, and Sathyabama
              University, has conferred, Vivek with an honorary doctorate for
              his contribution to the society through cinema.
            </p>
          </div>
        </VivAbout>
      </Col>
    </Row>
  );
};

export default AboutVivek;
