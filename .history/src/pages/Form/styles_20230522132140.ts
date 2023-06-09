import { styled } from "styled-components";
import missao from "../../assets/missao.svg"

export const FormContainer = styled.div`
  max-width: 60rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${missao});
  background-size: cover;
  background-position: center;
  flex-grow: 1;

`;
