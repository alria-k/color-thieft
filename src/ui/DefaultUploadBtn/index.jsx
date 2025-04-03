import styled from "styled-components";

const UploadBtnBox = styled.div`
  min-height: 58px;
  max-height: 58px;
  position: relative;
  width: fit-content;
  border-radius: 20px;
  background: transparent;
  border: 1px solid #fff;
`;
const UploadCustomBtn = styled.label`
  padding: 12px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const UploadText = styled.p`
  opacity: 15%;
  color: #fff;
  font-size: 19px;
`;
const UploadIconBox = styled.div`
  width: 40px;
  padding-left: 10px;
  border-left: 2px solid #fff;
`;
const UploadBtnInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const DefaultUploadBtn = ({ children, clickFunc }) => {
  function handleClick(e) {
    const file = e.target.files[0];
    if (file) clickFunc(window.URL.createObjectURL(file));
    e.target.value = "";
  }

  return (
    <UploadBtnBox>
      <UploadCustomBtn htmlFor="image">
        <UploadText>{children}</UploadText>
        <UploadIconBox>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </UploadIconBox>
      </UploadCustomBtn>
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
