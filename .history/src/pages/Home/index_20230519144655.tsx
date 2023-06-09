import { HUBlogo } from "../../componets/HUBlogo";
import { Header } from "../../componets/Header";
import {
  // BackgroundImage,
  Container,
  ContainerContent,
} from "./styles";

export function Home() {
  return (
    <Container>
      <ContainerContent>
        <Header />
        {/* <BackgroundImage /> */}

        <HUBlogo />
      </ContainerContent>
    </Container>
  );
}
