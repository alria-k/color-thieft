import { useState, useEffect } from "react";
import styled from "styled-components";
import ColorThief from "colorthief";

import { Color } from "../../ui/Color";
import { rgbToHex } from "../../utils/helpers";

const ColorContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ColorsPalette = ({ image }) => {
  const [colorsPalette, setColorsPalette] = useState([]);
  const colorThieft = new ColorThief();

  useEffect(() => {
    setColorsPalette(colorThieft.getPalette(image.element, 20));
  }, [image]);

  return (
    <ColorContainer>
      {colorsPalette.map((data, i) => (
        <Color key={i} bgColor={rgbToHex(data)} />
      ))}
    </ColorContainer>
  );
};
