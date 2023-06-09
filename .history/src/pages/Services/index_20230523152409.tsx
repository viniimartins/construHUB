import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #000000;
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

const Icon = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 50%;
`;

export const Services: React.FC = () => {
  const icons = Array.from({ length: 9 }, (_, index) => index + 1); // Array de ícones para demonstração

  return (
    <CircleContainer>
      <IconWrapper>
        {icons.map((_, index) => (
          <Icon key={index} angle={(index * (360 / icons.length))}>
            {/* Inclua aqui o código ou o componente do ícone */}
            <span>Icon {index + 1}</span>
          </Icon>
        ))}
      </IconWrapper>
      <Logo>Logo</Logo>
    </CircleContainer>
  );
};