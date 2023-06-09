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

const CenterText = styled.div`
  font-size: 20px;
`;

const CircleWithDivs: React.FC = () => {
  const divAngles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
    <CircleContainer>
      <CenterDiv>
        <CenterText>Texto no Centro</CenterText>
      </CenterDiv>
      <div>
        {divAngles.map((angle, index) => (
          <div key={index} style={{ transform: `rotate(${angle}deg) translateX(170px)` }}>
            Div {index + 1}
          </div>
        ))}
      </div>
    </CircleContainer>
  );
};

export default CircleWithDivs;
