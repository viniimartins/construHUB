import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

// Estilos do fundo de imagem
export const BackgroundImage = styled.div`
  width: 100vh;
  height: 100vh;
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  
  display: flex;
  /* height: 500px; */
`;

export const Header = styled.header`
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// Estilos do texto no meio
export const Content = styled.div`
  text-align: center;
  padding: 50px;
  color: #333;
`;

// Estilos do footer
export const Footer = styled.footer`
  /* background-color: #333; */
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// Estilos das imagens no footer
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
