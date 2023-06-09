import React from "react";
import styled from "styled-components";
import icon from "../../assets/icon.png";

const CircleContainer = styled.div`
  width: 520px;
  height: 520px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
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
  width: 80px;
  height: 80px;
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
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 190px;
`;

export const Services: React.FC = () => {
  const divAngles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
    <CircleContainer>
      <CircleDivWrapper>
        {divAngles.map((angle, index) => (
          <CircleDiv key={index} angle={angle}>
            <img src={icon} alt="" />
          </CircleDiv>
        ))}
      </CircleDivWrapper>
      <TextDiv>
        <div>Texto no Centro</div>
      </TextDiv>
    </CircleContainer>
  );
};
