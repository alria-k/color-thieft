import styled from "styled-components";

const ContainerBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Container = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
