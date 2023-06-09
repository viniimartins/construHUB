import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10.6rem;
`;

export const ContainerText = styled.div`
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
`;
