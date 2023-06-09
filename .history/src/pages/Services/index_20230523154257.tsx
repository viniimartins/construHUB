import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Services: React.FC = () => {
  return (
    <CircleContainer>
      <IconDiv>
        {/* Inclua aqui o código ou o componente do ícone */}
        <span>Icon</span>
      </IconDiv>
      <TextDiv>dev</TextDiv>
    </CircleContainer>
  );
};

