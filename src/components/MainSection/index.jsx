import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { DefaultBtn } from "../../ui/DefaultBtn";
import { DefaultUploadBtn } from "../../ui/DefaultUploadBtn";
import { ColorsPalette } from "../ColorsPalette";

const UploadContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
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
`;
const ImageItem = styled.img`
  width: 700px;
`;

// TODO:
// Drag&drop изображения.
// Копировать цвет по клику
// На ховер цвета показывать hex
// Помеять кнопку "Upload" на красивую (с иконкой загрузки приложения)
// Добавить кол-во выдающих цветов (от 5 до 20)
// Показ Loading при загрузке цветов

export const MainSection = () => {
  const [image, setImage] = useState(null);
  const [imageComponent, setImageComponent] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) setImageComponent({ element: ref.current });
  }, [image]);

  return (
    <div>
      <UploadContainer>
        <DefaultBtn clickFunc={setImage}>Generate random image</DefaultBtn>
        <DefaultUploadBtn clickFunc={setImage}>
          Upload Your Image
        </DefaultUploadBtn>
      </UploadContainer>
      <DataContainer>
        {image && (
          <>
            <ImageContainer>
              <ImageItem src={image} alt="image" ref={ref} />
            </ImageContainer>
            {/* {imageComponent && <ColorsPalette image={imageComponent} />} */}
          </>
        )}
      </DataContainer>
    </div>
  );
};
