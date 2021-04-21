import React from "react";
import styled from "styled-components";
import treeBackground from "../assets/tree-background-full.png";
import divider from "../assets/divider-right-condensed.svg";

const Divider = styled.div`
  position: relative;
  background-color: #287775;
  /* padding: 0 0 2rem; */
  /* background-image: url(${treeBackground});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%; */
  /* height: 17.5vh; */
`;

// const DividerImage = styled.img`
//   width: 100%;
//   position: absolute;
//   bottom: -1px;
//   left: 0;
// `;

const DividerLine = styled.div`
  height: 10px;
  width: 100%;
  background-color: #287775;
`;

export default function BannerGreen() {
  return (
    <Divider>
      <DividerLine></DividerLine>
    </Divider>
  );
}
