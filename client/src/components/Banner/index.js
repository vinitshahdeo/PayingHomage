import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useBanner from "./containerHook";
import SpaceShip from "../Spaceship";
import Cloud1 from "../Cloud1";
import Cloud2 from "../Cloud2";
import Astronaut from "../Astronaut";
import BannerContent from "../BannerContent";
import Disclaimer from "../Disclaimer";

import background from "../../assets/please-01.png";
import patern from "../../assets/pattern-stars.png";
import Plantation from "../Plantation";
import logo from "../../assets/Asset-4.svg";
import headerImage from "../../assets/top-hero.png";

const BannerContainer = styled.div`
  height: 100vh;
  background: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  background-repeat: no-repeat;
`;

const Logo = styled.img`
  position: absolute;
  max-width: 14rem;
  width: 100%;
  top: 10%;
  left: 10%;
  margin: 0 auto 1rem;
`;

const BannerCon = styled(Container)`
  height: 100%;
`;

const BannerRow = styled(Row)`
  height: 100%;
`;

const HomageButton = styled.button`
  background: #287775;
  position: absolute;
  top: 15%;
  right: 10%;
  outline: none;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  letter-spacing: 0.5mm;
  color: white;
  font-weight: 800;
`;

const HeaderCloud = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0 auto 1rem;
`;

export default function Banner() {
  const { getTrees } = useBanner();
  const trees = getTrees();

  return (
    <BannerContainer>
      <HeaderCloud src={headerImage} />
      <BannerCon>
        <BannerRow>
          <Col className="mx-auto" lg={5}>
            <BannerContent trees={trees} />
          </Col>
        </BannerRow>
      </BannerCon>
      {/* <SpaceShip /> */}
      <a href="https://forms.gle/FXkt8LftB2YJBxzv5">
        <HomageButton className='hideInPhone'>Pay Homage</HomageButton>
      </a>
      <Astronaut className='hideInPhone'/>
      <Plantation />
      <Logo src={logo} />
      {/* <Cloud1 /> */}
      {/* <Cloud2 /> */}
      {/* <Astronaut /> */}
      {/* <Disclaimer /> */}
    </BannerContainer>
  );
}
