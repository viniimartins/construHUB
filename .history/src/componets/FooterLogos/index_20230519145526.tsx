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
        <FooterImage src="" alt="Imagem 1" />
        <FooterImage src="caminho/para/imagem2.jpg" alt="Imagem 2" />
        <FooterImage src="caminho/para/imagem3.jpg" alt="Imagem 3" />
        <FooterImage src="caminho/para/imagem4.jpg" alt="Imagem 4" />
        <FooterImage src="caminho/para/imagem5.jpg" alt="Imagem 5" />
      </FooterImages>
    </Footer>
  );
}
