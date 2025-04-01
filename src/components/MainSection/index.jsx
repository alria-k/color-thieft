import styled from "styled-components";

import { DefaultBtn } from "../../ui/DefaultBtn";
import { DefaultUploadBtn } from "../../ui/DefaultUploadBtn";

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MainSection = () => {
  return (
    <UploadContainer>
      <DefaultBtn>Generate random image</DefaultBtn>
      <DefaultUploadBtn>Upload Your Image</DefaultUploadBtn>
    </UploadContainer>
  );
};
