import {
  Container,
  ContainerText,
  ContainerButton,
  ContainerRights,
} from "./styles";
import HubImg from "../../assets/Hub.svg";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <img src={HubImg} alt="" />
        <p>Conectando investidores a profissionais da construção civil.</p>
        <ContainerRights>Todos os direitos reservados. C 2023
        </ContainerRights>
      </ContainerText>
      <ContainerButton>
        <input type="text" />
        <p>@constru.hub</p>
      </ContainerButton>
    </Container>
  );
}
