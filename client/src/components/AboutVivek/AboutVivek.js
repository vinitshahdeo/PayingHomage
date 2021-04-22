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
            <h2 className='headings'>About Dr. Vivekh</h2>
            <p className='about__vivek'>
              Vivekanandan, better known as Vivekh, Indian film actor, comedian,
              Television personality, playback singer and versatile social
              activist working for the Tamil film industry.
              Introduced in films by the legendary Director late. Shri. K. Bala
              Chander.
              In 2009, Government of India awarded with the prestigious Padma
              Shri award for his contribution to the arts, and Sathyabama
              University, has conferred, Vivek with an honorary doctorate for
              his contribution to the society through cinema.
            </p>
            <h2 className='headings'>His Vision</h2>
            <p className='about__vivek'>
              This mission is fast reaching and as of now 30.23 lakhs plantings were completed, and Actor vivekh has focused to complete this task through Sai Prasanna Foundation.
              In the year 2010, launch GREEN KALAM PROJECT under guidance of Former President of India Late Dr .A.P.J Abdul Kalam with the mission of planting 1 crore  trees and ventured into a mass campaign on global warming which is aimed at saving planets.
              Had been travelling within the state visiting various educational institution and a planted 29.03 Lakhs saplings as on December 31 2017  with the support of school and college children and  cooperation from the public.
            </p>
          </div>
        </VivAbout>
      </Col>
    </Row>
  );
};

export default AboutVivek;
