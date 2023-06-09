import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;

  img {
    width: 387px;
    height: 316px;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
`;

export const Meters = styled.p`
  margin-top: 1rem;
  margin-bottom: 0.25rem;

  font-size: 16px;
  line-height: 125%;
  letter-spacing: 0.02em;

  color: #404040;
`;

export const Name = styled.p`
  font-size: 24px;
  line-height: 125%;

  letter-spacing: 0.02em;

  color: #000000;

  margin-bottom: 0.5rem;
`;

export const Apartments = styled.p`
  width: 100%;
`;

export const ProjectLink = styled.a``;
