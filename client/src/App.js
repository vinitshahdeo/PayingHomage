import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Banner from "./components/Banner";
import BannerDivider from "./components/BannerDivider";
import Projects from "./components/Projects";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import trees from "./assets/trees.json";
import { sortByAttribute } from "./sort";

import background from "./assets/footer-hills-trees.svg";
import SubscribeForm from "./components/Subscribe/subscribeForm";
import Footer from "./components/Footer/Footer";
import AboutVivek from "./components/AboutVivek/AboutVivek";

const ProjectsContainer = styled.div`
  /* why?
  transform: translatey(-45px); */
`;

const PageContainer = styled.div`
  background: url(${background}) no-repeat center bottom,
    linear-gradient(#fff, #f6f6f4);
`;

const IndexContainer = styled.div`
  margin-top: 30px;
  padding-left: 15px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
`;

const Index = styled.h1`
  color: #273654;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

function App() {
  const items = sortByAttribute(trees, "year");

  return (
    <PageContainer>
      <Banner />
      <BannerDivider />
      <Container>
        <AboutVivek />
        <SubscribeForm />
      </Container>
      <Footer />
    </PageContainer>
  );
}

export default App;
