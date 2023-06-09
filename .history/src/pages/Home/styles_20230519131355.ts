import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const HomeContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  width: 100%;
  /* width: 100vh; */
  height: 100vh;
  background-image: url(${homeImg});
`;

export const HeaderContainer = styled.header``;
