import styled, { createGlobalStyle } from "styled-components";

import { MainSection } from "./components/MainSection/Index";
import { Container } from "./components/Container";

const ResetCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    position: relative;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    overflow-x: hidden;
    background-color: #282A36;
    box-shadow: 0 0 100px 50px rgba(0, 0, 0, 0.5) inset;
    min-height: 100vh;
    color: #fff;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    display: block;
  }
  article>*+* {
    margin-top: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  button {
    cursor: pointer;
  }
  p, a, input{
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-weight: 600;
    font-style: normal;
  }
  h2, h3, h4, h5, h6{
    font-weight: 500;
    font-style: normal;
  }
`;

const Content = styled.div`
  padding: 20px 0;
`;
const TextContainer = styled.div`
  text-align: center;
  max-width: 550px;
  width: 100%;
  margin: 0 auto 20px;
`;
const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 34px;
`;
const Discription = styled.p`
  font-size: 18px;
`;

export const App = () => {
  return (
    <>
      <ResetCss />
      <Content>
        <Container>
          <div>
            <TextContainer>
              <Title>
                Welcome to Color Thieft – Your Ultimate Color Inspiration!
              </Title>
              <Discription>
                Upload an image or get the random one, and instantly generate
                the perfect color palette. Discover harmonious shades, copy
                color codes, and get inspired!
              </Discription>
            </TextContainer>
            <MainSection />
          </div>
        </Container>
      </Content>
    </>
  );
};
