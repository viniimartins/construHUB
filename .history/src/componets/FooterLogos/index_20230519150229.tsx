import { Footer, FooterImage, FooterImages } from "./styles";
import OroLogo from "../../assets/Oro.svg";
import BrasilLogo from "../../assets/Brasil.svg";
import EraldoLogo from "../../assets/Eraldo.svg";
import PhoenixLogo from "../../assets/Phoenix.svg";
import MundoLogo from "../../assets/Mundo.svg";

export function FooterLogos() {
  return (
    <Footer>
      <a>EMPRESAS QUE CONFIAM NA GENTE</a>
      <FooterImages>
        <FooterImage src={OroLogo} alt="" />
        <FooterImage src={BrasilLogo} alt="" />
        <FooterImage src={EraldoLogo} alt="" />
        <FooterImage src={PhoenixLogo} alt="" />
        <FooterImage src={MundoLogo} alt="" />
      </FooterImages>
    </Footer>
  );
}
