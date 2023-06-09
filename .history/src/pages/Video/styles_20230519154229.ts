import { styled } from "styled-components";

export const ContainerVideo = styled.div`
  max-width: 60rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${props => props.theme.black}

    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;

  }
`;
