import { useRef } from "react";
import styled from "styled-components";

const ColorItem = styled.span`
  position: absolute;
  opacity: 0;
  color: #fff;
  background-color: #000;
  border-radius: 8px;
  border: none;
  cursor: default;
  min-width: 90px;
  text-align: center;
  top: -30px;
  left: -15%;
  padding: 2px 12px;
  pointer-events: none;
  &::before {
    content: "▼";
    position: absolute;
    color: #000;
    bottom: -14px;
    left: 40%;
  }
`;
const ColorBox = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  background-color: ${({ $colorPallete }) => $colorPallete};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    ${ColorItem} {
      opacity: 1;
    }
  }
`;
const HiddenColorItem = styled.textarea`
  width: 0;
  height: 0;
  opacity: 0;
  cursor: default;
  padding: 0;
`;

export const Color = ({ bgColor }) => {
  const hexTextAreaRef = useRef(null);

  function handleCopyColor() {
    if (hexTextAreaRef == null) return;
    hexTextAreaRef.current.select();
    document.execCommand("copy");
  }

  return (
    <ColorBox $colorPallete={bgColor} onClick={handleCopyColor}>
      <ColorItem>{bgColor}</ColorItem>
      <HiddenColorItem defaultValue={bgColor} ref={hexTextAreaRef} readOnly />
    </ColorBox>
  );
};
