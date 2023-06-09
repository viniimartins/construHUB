import { HeaderContainer, HomeContainer, HomeContent } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <HeaderContainer>HEADER</HeaderContainer>
        <div>
          <div>LOGO</div>
          <div>TEXTO</div>
        </div>
        <footer>
          <div>EMPRESTAS</div>
        </footer>
      </HomeContent>
    </HomeContainer>
  );
}
