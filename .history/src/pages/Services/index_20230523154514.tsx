import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid #000000;
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
`;

const DevDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const CircleWithIcons: React.FC = () => {
  const icons = Array.from({ length: 9 }, (_, index) => index + 1); // Array de ícones para demonstração

  return (
    <CircleContainer>
      <IconWrapper>
        {icons.map((_, index) => (
          <Icon key={index} angle={(index * (360 / icons.length))}>
            {/* Inclua aqui o código ou o componente da div de ícone */}
            <div>Icon {index + 1}</div>
          </Icon>
        ))}
      </IconWrapper>
      <DevDiv>dev</DevDiv>
    </CircleContainer>
  );
};

export default CircleWithIcons;
