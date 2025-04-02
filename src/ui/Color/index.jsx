import React from "react";
import styled from "styled-components";

const ColorBox = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: ${({ $colorPallete }) => $colorPallete};
  border-radius: 50px;
  cursor: pointer;
`;
const ColorItem = styled.div``;

export const Color = ({ bgColor }) => {
  return (
    <ColorBox $colorPallete={bgColor}>
      <ColorItem />
    </ColorBox>
  );
};
