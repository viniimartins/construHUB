import { styled } from "styled-components";

export const ContainerVideo = styled.div`
  max-width: 60rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 125%;
    /* identical to box height, or 80px */

    text-align: center;
    letter-spacing: 0.02em;

    color: ${props => props.color}
  }
`;
