import React from "react";
import styled from "styled-components";
import Link from "./Link";
import CountUp from "./CountUp";

import counterStar from "../assets/counter-starburst-light.svg";
import counterUnderline from "../assets/counter-underline.svg";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CounterWrapper = styled.div`
  background: url(${counterStar});
  background-position: top center;
  background-repeat: no-repeat;
  padding: 2.25rem 2rem 1.25rem;
  background-size: 120px auto;
`;

const SubTitle = styled.p`
  letter-spacing: 2px;
  text-transform: uppercase !important;
  color: #113259;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 2rem;
`;

const CounterUnderline = styled.img`
  max-width: 5.25rem;
  width: 100%;
  display: block;
  margin: 0.25rem auto 0;
`;

const BannerText = styled.p`
  font-size: 1.15rem;
  color: #6f6f6f;
  margin-bottom: 2rem;
`;

export default function BannerContent({ trees }) {
  return (
    <BannerContainer>
      <CounterWrapper>
        <CountUp value={trees} />
        <SubTitle className='headings'>trees planted</SubTitle>
        <CounterUnderline src={counterUnderline} />
      </CounterWrapper>
      <BannerText>
        This website is dedicated to Veteran Actor "Chinna Kalaivanar" Vivek sir
        to show the current number of trees planted as a part of the one crore
        trees plantation drive.*
      </BannerText>
      {/* <div className="mt-2 mb-5">
        <Link link="#homageForm">Pay Homage</Link>
      </div> */}
    </BannerContainer>
  );
}
