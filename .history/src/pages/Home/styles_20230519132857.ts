import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  color: #fff;
  padding: 20px;
  text-align: center;
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
`;

export const FooterImages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FooterImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;
