import React from "react";
import styled from "styled-components";
import plantation from "../assets/Asset-3.svg";

const People = styled.img`
  position: absolute;
  max-width: 18.75rem;
  width: 100%;
  left: 33%;
  bottom: 0;
`;

export default function Plantation() {
  return <People src={plantation} />;
}
