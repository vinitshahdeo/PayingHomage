import React from "react";
import styled from "styled-components";
import useCountUpAnimation from "./containerHook";
import { toStringWithCommas } from "../../helpers";

const Title = styled.h1`
  color: #287775;
  line-height: 0.875;
  font-weight: 900;
  font-size: 4.5rem;
  margin: 1.25rem 0.75rem 0.5rem;
`;

export default function CountUp({ value }) {
  const { count } = useCountUpAnimation(true, value, 0);
  return <Title>{toStringWithCommas(count)}</Title>;
}
