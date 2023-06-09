import styled from "styled-components";
import {
  CircleContainer,
  CircleDivWrapper,
  CircleDiv,
  TextDiv,
} from "./styles";

import icon from "../../assets/icon.png";
import HubImg from "../../assets/LogoProvisoria.svg";

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
        <img src={HubImg} alt="" />
      </TextDiv>
    </CircleContainer>
  );
};
