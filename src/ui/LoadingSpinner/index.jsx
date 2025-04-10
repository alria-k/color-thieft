import styled from "styled-components";
import { animate, motion } from "framer-motion";

const StyleContainer = styled(motion.div)`
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
    <StyleContainer
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.span
        style={styleSpan}
        animate={{ rotate: 360, opacity: 1, scale: 1 }}
        transition={spinTransition}
      />
    </StyleContainer>
  );
};
