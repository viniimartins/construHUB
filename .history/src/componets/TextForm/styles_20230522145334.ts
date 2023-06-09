import { styled } from "styled-components";

export const Container = styled.div`
  width: 54.188rem;
  height: 10rem;

  p {
    font-size: 4rem;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;

    color: ${props => props.theme.white}
  }
`;
