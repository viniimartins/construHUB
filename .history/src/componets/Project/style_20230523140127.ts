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

  font-size: 1rem;
  line-height: 125%;
  letter-spacing: 0.02em;

  color: #404040;
`;

export const Name = styled.p`
  margin-bottom: 0.5rem;


  font-size: 1.5rem;
  line-height: 125%;

  letter-spacing: 0.02em;

  color: #000000;

`;

export const Apartments = styled.p`
  margin-bottom: 2.25rem;


  font-size: 1rem;
  line-height: 125%;
  letter-spacing: 0.02em;

  color: #000000;
`;

export const ProjectLink = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 125%;
/* identical to box height, or 20px */

letter-spacing: 0.02em;
text-decoration-line: underline;

color: #000000;

`;
