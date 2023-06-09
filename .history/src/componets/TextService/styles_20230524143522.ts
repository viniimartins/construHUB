import { styled } from "styled-components";

export const ContainerText = styled.div`
  flex-direction: column;
  justify-content: center;

  width: 491px;
  height: 80px;

  h1 {
    font-weight: 300;
    font-size: 64px;
    line-height: 125%;

    color: ${(props) => props.theme.black};
  }
  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;

    letter-spacing: 0.02em;

    color: #333333;
  }
`