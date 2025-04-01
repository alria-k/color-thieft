import styled from "styled-components";

const Button = styled.button`
  width: fit-content;
  color: #fff;
  outline: none;
  border-radius: 20px;
  padding: 12px;
  background-color: #4d3e78;
  border: 1px solid #4d3e78;
  font-size: 24px;
`;

export const DefaultBtn = ({ children, clickFunc }) => {
  function handleClick() {
    clickFunc();
  }
  return <Button onClick={handleClick}>{children}</Button>;
};
