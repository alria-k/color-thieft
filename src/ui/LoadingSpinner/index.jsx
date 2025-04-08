import styled from "styled-components";
import { motion } from "framer-motion";

const StyleContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const styleSpan = {
  display: "block",
  width: 200,
  height: 200,
  border: "7px solid #eee",
  borderTop: "7px solid #2D3134",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0,
};

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  // width: ['100%', '50%'],
  duration: 1,
};

export const Spinner = () => {
  return (
    <StyleContainer>
      <motion.span
        style={styleSpan}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ rotate: 360, opacity: 1, scale: 1 }}
        transition={{
          spinTransition,
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      />
    </StyleContainer>
  );
};
