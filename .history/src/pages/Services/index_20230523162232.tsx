import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  width: 520px;
  height: 520px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
`;

const CircleDivWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const CircleDiv = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg)
    translateX(260px) rotate(-${(props) => props.angle}deg);
  width: 60px;
  height: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0px 8px 40px -4px rgba(0, 0, 0, 0.08);
`;

const TextDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 312px;
  height: 312px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Services: React.FC = () => {
  const divAngles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
    <CircleContainer>
      <CircleDivWrapper>
        {divAngles.map((angle, index) => (
          <CircleDiv key={index} angle={angle}>
            Div {index + 1}
          </CircleDiv>
        ))}
      </CircleDivWrapper>
      <TextDiv>
        <div>Texto no Centro</div>
      </TextDiv>
    </CircleContainer>
  );
};
