import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  /* background-color: #f0f0f0; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Icon = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 50%;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border: 4px solid #000000;
  border-radius: 50%;
`;

export const Services: React.FC = () => {
  const icons = Array.from({ length: 9 }, (_, index) => index + 1); // Array de ícones para demonstração

  return (
    <CircleContainer>
      <IconWrapper>
        {icons.map((_, index) => (
          <Icon key={index} angle={(index * 40) - 45} />
        ))}
      </IconWrapper>
      <ImageContainer>
        <Image src="path/to/image.png" alt="Image" />
      </ImageContainer>
    </CircleContainer>
  );
};