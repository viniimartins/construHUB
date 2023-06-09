import { Footer, FooterImage, FooterImages } from "./styles";
import { OroLogo } from "../../assets/Oro.svg";
import { BrasilLogo } from "../../assets/Brasil.svg";
import { EraldoLogo } from "../../assets/Eraldo.svg";
import { PhoenixLogo } from "../../assets/Phoenix.svg";
import { MundoLogo } from "../../assets/Mundo.svg";

export function FooterLogo() {
  return (
    <Footer>
      <h3>Meu Footer</h3>
      <FooterImages>
        <FooterImage src={OroLogo} alt="Imagem 1" />
        <FooterImage src={BrasilLogo} alt="Imagem 2" />
        <FooterImage src={EraldoLogo} alt="Imagem 3" />
        <FooterImage src={PhoenixLogo} alt="Imagem 4" />
        <FooterImage src="caminho/para/imagem5.jpg" alt="Imagem 5" />
      </FooterImages>
    </Footer>
  );
}
