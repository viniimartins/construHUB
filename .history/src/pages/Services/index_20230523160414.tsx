import React from 'react';
import styled from 'styled-components';

const CircleContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
`;

const CenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleWithDivs: React.FC = () => {
  return (
    <CircleContainer>
      <CenterDiv>
        <div>Div dentro do Círculo</div>
      </CenterDiv>
    </CircleContainer>
  );
};

export default CircleWithDivs;
