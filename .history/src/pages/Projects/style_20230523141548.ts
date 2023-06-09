import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 60rem;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin-bottom: 4.5rem;


  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 125%;
  /* identical to box height, or 80px */

  text-align: center;
  letter-spacing: 0.02em;

  color: #000000;
`;

export const ContainerProjets = styled.div`
  display: flex;
  gap: 1.938rem;
  flex-direction: row;
  align-items: center;
`;
