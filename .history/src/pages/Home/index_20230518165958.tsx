import { HeaderContainer } from "../../components/Header/styles";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HeaderContainer>HEADER</HeaderContainer>
      <div>
        <div>LOGO</div>
        <div>TEXTO</div>
      </div>
      <footer>
        <div>EMPRESTAS</div>
      </footer>
    </HomeContainer>
  );
}
