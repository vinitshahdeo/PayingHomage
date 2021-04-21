import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #113259;
  margin-top: 50px;
  padding: 25px;
  color: #fff;
  font-weight: 500;
`;

const Footer = () => {
  return <StyledFooter>Copyright &copy; 2021 Team Vivek</StyledFooter>;
};

export default Footer;
