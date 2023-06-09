import { Container, ContainerText, ContainerButton } from "./styles";
import HubImg from "../../assets/Hub.svg";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <img src={HubImg} alt="" />
        <p>Conectando investidores a profissionais da construção civil.</p>
        <p>Todos os direitos reservados. C 2023</p>
      </ContainerText>
      <ContainerButton>
        <input type="text" />
        <p>@constru.hub</p>
      </ContainerButton>
    </Container>
  );
}
