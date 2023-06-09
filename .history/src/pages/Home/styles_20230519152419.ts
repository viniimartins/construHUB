import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  flex-grow: 1;


`;

export const ContainerContent = styled.div`
  max-width: 85.375rem;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;


  border: 1px solid green;

`;
