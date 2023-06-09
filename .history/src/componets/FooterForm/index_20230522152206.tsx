import { Container, ContainerText, ContainerButton, ContainerRights} from "./styles";
import HubImg from "../../assets/Hub.svg";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <img src={HubImg} alt="" />
        <p>Conectando investidores a profissionais da construção civil.</p>
        <ContainerRights>
          <p>Todos os direitos reservados. C 2023</p>
        </ContainerRights>
      </ContainerText>
      <ContainerButton>
        <input type="text" />
        <p>@constru.hub</p>
      </ContainerButton>
    </Container>
  );
}
