import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// Estilos do fundo de imagem
const BackgroundImage = styled.div`
  background-image: url("caminho/para/sua/imagem.jpg");
  background-size: cover;
  background-position: center;
  height: 500px;
`;

// Estilos do texto no meio
const Content = styled.div`
  text-align: center;
  padding: 50px;
  color: #333;
`;

// Estilos do footer
const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

// Estilos das imagens no footer
const FooterImages = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const FooterImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;
