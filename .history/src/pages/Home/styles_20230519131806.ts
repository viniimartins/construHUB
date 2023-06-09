import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const HomeContainer = styled.div`
  background-image: url(${homeImg});

  background-size: cover;
  background-position: center;
  height: 500px;
`;

export const HomeContent = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
`;

export const HeaderContainer = styled.header``;
