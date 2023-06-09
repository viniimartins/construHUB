import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";




const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const BackgroundImage = styled.div`
  background-image: url('caminho/para/sua/imagem.jpg');
  background-size: cover;
  background-position: center;
  flex-grow: 1;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
  color: #333;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

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