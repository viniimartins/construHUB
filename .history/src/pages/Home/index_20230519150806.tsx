import { FooterImages } from "../../componets/FooterLogos/styles";
import { HUBlogo } from "../../componets/HUBlogo";
import { Header } from "../../componets/Header";
import {
  Container,
  ContainerContent,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerContent>
        <Header />

        <HUBlogo />

        <FooterImages />
      </ContainerContent>
    </Container>
  );
}
