import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  flex-grow: 1;

  div {
    max-width: 57.625rem;
    margin: 1.656rem auto;

    display: flex;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  color: #fff;
  padding: 20px;
  text-align: center;

  img {
    width: 125px;
    height: 32px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  color: #333;
`;

export const Footer = styled.footer`
  color: #fff;
  padding: 20px;
  text-align: center;

  display: flex;
  flex-direction: row;
`;

export const FooterImages = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const FooterImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;
