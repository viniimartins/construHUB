import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Icon = styled.svg<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
  width: 40px;
  height: 40px;
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

const CircleWithIcons: React.FC = () => {
  const icons = Array.from({ length: 9 }, (_, index) => index + 1); // Array de ícones para demonstração

  return (
    <CircleContainer>
      <IconWrapper>
        {icons.map((_, index) => (
          <Icon key={index} angle={(index * (360 / icons.length))}>
            <circle cx="20" cy="20" r="20" fill="#f0f0f0" />
          </Icon>
        ))}
      </IconWrapper>
      <ImageContainer>
        <Image src="path/to/image.png" alt="Image" />
      </ImageContainer>
    </CircleContainer>
  );
};

export default CircleWithIcons;
