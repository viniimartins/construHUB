import HubImg from "../../assets/image14.svg";

import {
  Header,
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
        <Header>
          <img src={HubImg} alt="" />
          <p>
            <a href="">Meu Item</a>
          </p>
          <p>
            <a href="">Meu Item</a>
          </p>
          <p>
            <a href="">Meu Item</a>
          </p>

          <button>Entrar Em Contato</button>
        </Header>

        {/* <BackgroundImage /> */}

        <Content>
          <img src={HubImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed hendrerit faucibus dolor nec ultrices. In id tortor ac
            sem feugiat aliquam. Vestibulum feugiat sem ac purus hendrerit, ac
            interdum velit viverra.
          </p>
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
