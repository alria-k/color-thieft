import styled from "styled-components";

import { getRandomPhoto } from "../../api/api";

const Button = styled.button`
  width: fit-content;
  color: #fff;
  outline: none;
  border-radius: 20px;
  padding: 12px;
  background-color: #4d3e78;
  border: 1px solid #4d3e78;
  font-size: 19px;
  min-height: 58px;
`;

export const DefaultBtn = ({ children, clickFunc }) => {
  function handleClick() {
    const dataPromise = getRandomPhoto();
    dataPromise.then(({ data }) => {
      clickFunc(data.urls.regular);
    });
  }
  return <Button onClick={handleClick}>{children}</Button>;
};
