import { FooterLogos } from "../../componets/FooterLogos";
import { HUBlogo } from "../../componets/HUBlogo";
import { Header } from "../../componets/Header";

import { Container, ContainerContent } from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerContent>
        <Header />
        <HUBlogo />
        <FooterLogos />
      </ContainerContent>
    </Container>
  );
}
