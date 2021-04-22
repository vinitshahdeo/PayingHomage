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
    margin: 16px 0;
  }
`;
const VivAbout = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 75px 0;
  @media (max-width: 768px) {
    padding: 16px 0;
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
            <h2 className='headings'>RIP Sir Vivek</h2>
            <p className='about__vivek'>
              Vivekanandan, better known as Vivek, Indian film actor, comedian,
              Television personality, playback singer and versatile social
              activist working for the Tamil film industry is no more with us.
              He was introduced in films by the legendary Director late. Shri. K. Bala
              Chander. In 2009, Government of India awarded with the prestigious Padma
              Shri award for his contribution to the arts, and Sathyabama
              University, has conferred, Vivek with an honorary doctorate for
              his contribution to the society through cinema.
            </p>
            <h2 className='headings'>Paying tribute</h2>
            <p className='about__vivek'>
            We are thinking in similar lines as many of Actor Vivek's fans. We would like to document the trees planting efforts by the fans so that we will keep a counter to confirm that we reached 1,00,00,000 plus trees planted in memory of Actor Padma Shri Vivek's initiative to plant trees as advised by his Guru Dr. Abdul Kalam few years back. We are trying to carry the mantle that Vivek Sir had left with us. Do help us in carrying the mantle forward through planting of Trees! 
            </p>
          </div>
        </VivAbout>
      </Col>
    </Row>
  );
};

export default AboutVivek;
