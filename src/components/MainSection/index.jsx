import { useState, useRef } from "react";
import styled from "styled-components";

import { DefaultBtn } from "../../ui/DefaultBtn";
import { DefaultUploadBtn } from "../../ui/DefaultUploadBtn";
import { ColorsPalette } from "../ColorsPalette";
import { Spinner } from "../../ui/LoadingSpinner";

const UploadContainer = styled.div`
  max-width: 585px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
`;
const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
const ImageContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;
const ImageItem = styled.img`
  height: 500px;
`;
const SpinnerBox = styled(DataContainer)`
  justify-content: center;
`;

// TODO:
// Drag&drop изображения.
// Копировать цвет по клику DONE
// На ховер цвета показывать hex DONE
// Помеять кнопку "Upload" на красивую (с иконкой загрузки приложения) DONE
// Добавить кол-во выдающих цветов (от 5 до 20)
// Показ Loading при загрузке цветов

export const MainSection = () => {
  const [image, setImage] = useState(null);
  const [imageComponent, setImageComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null);

  function handleLoadImage() {
    setIsLoading(false);
    if (ref.current) setImageComponent({ element: ref.current });
  }

  return (
    <div>
      <UploadContainer>
        <DefaultBtn clickFunc={setImage} setIsLoading={setIsLoading}>
          Generate random image
        </DefaultBtn>
        <DefaultUploadBtn clickFunc={setImage} setIsLoading={setIsLoading}>
          Upload or Drag image
        </DefaultUploadBtn>
      </UploadContainer>
      <DataContainer>
        {!isLoading ? (
          <>
            <ImageContainer>
              {image && (
                <ImageItem
                  src={image}
                  ref={ref}
                  onLoad={handleLoadImage}
                  crossOrigin="anonymous"
                />
              )}
            </ImageContainer>
            {imageComponent && <ColorsPalette image={imageComponent} />}
          </>
        ) : (
          <SpinnerBox>
            <Spinner />
          </SpinnerBox>
        )}
      </DataContainer>
    </div>
  );
};
