import { useState, useEffect } from "react";
import styled from "styled-components";
import ColorThief from "colorthief";
import * as motion from "motion/react-client";

import { Color } from "../../ui/Color";
import { rgbToHex } from "../../utils/helpers";
import { Spinner } from "../../ui/LoadingSpinner";

const ColorContainer = styled(motion.div)`
  width: 400px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ColorsPalette = ({ image }) => {
  const [colorsPalette, setColorsPalette] = useState([]);
  const [isPaletteReady, setIsPaletteReady] = useState(false);
  const colorThief = new ColorThief();

  useEffect(() => {
    if (image?.element) {
      setIsPaletteReady(true);
    }
    setColorsPalette([]);
    if (image?.element || image?.element.complete) {
      setColorsPalette(colorThief.getPalette(image.element, 20));
    }
  }, [image]);

  return (
    <ColorContainer>
      {colorsPalette.length == 0 && isPaletteReady ? (
        <Spinner />
      ) : (
        colorsPalette.map((data, i) => (
          <Color key={i} bgColor={rgbToHex(data)} />
        ))
      )}
    </ColorContainer>
  );
};
