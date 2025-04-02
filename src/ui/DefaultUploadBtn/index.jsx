import { useState } from "react";
import styled from "styled-components";

const UploadBtnBox = styled.div`
  position: relative;
  width: fit-content;
`;

const UploadCustomBtn = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 24px;
  border-radius: 20px;
  padding: 12px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
  cursor: pointer;
`;

const UploadBtnInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const DefaultUploadBtn = ({ children, clickFunc }) => {
  function handleClick(e) {
    clickFunc(window.URL.createObjectURL(...e.target.files));
  }

  return (
    <UploadBtnBox>
      <UploadCustomBtn htmlFor="image">{children}</UploadCustomBtn>
      <UploadBtnInput
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpeg"
        onChange={handleClick}
      />
    </UploadBtnBox>
  );
};
