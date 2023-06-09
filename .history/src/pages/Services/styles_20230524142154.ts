import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 78.25rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 10.5rem;
`;

export const ContainerText = styled.div`
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

export const Title = styled.p``;
