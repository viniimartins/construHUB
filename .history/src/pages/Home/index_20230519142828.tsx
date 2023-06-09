import HubImg from "../../assets/image14.svg";

import {
  // BackgroundImage,
  Content,
  Footer,
  FooterImages,
  FooterImage,
  Container,
  ContainerContent,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerContent>
        
        {/* <BackgroundImage /> */}

        <Content>
          <img src={HubImg} alt="" />
          <p>Conectando investidores a profissionais da construção civil.</p>
        </Content>

        <Footer>
          <h3>Meu Footer</h3>
          <FooterImages>
            <FooterImage src="caminho/para/imagem1.jpg" alt="Imagem 1" />
            <FooterImage src="caminho/para/imagem2.jpg" alt="Imagem 2" />
            <FooterImage src="caminho/para/imagem3.jpg" alt="Imagem 3" />
            <FooterImage src="caminho/para/imagem4.jpg" alt="Imagem 4" />
            <FooterImage src="caminho/para/imagem5.jpg" alt="Imagem 5" />
          </FooterImages>
        </Footer>
      </ContainerContent>
    </Container>
  );
}
