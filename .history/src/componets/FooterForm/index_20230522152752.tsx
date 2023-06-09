import {
  Container,
  ContainerText,
  ContainerButton,
  Rights,
  Text,
} from "./styles";
import HubImg from "../../assets/Hub.svg";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <img src={HubImg} alt="" />
        <Text>
          Conectando investidores a profissionais da construção civil.
        </Text>
        <Rights>Todos os direitos reservados. C 2023</Rights>
      </ContainerText>
      <ContainerButton>
        <input type="text" />
        <p>@constru.hub</p>
      </ContainerButton>
    </Container>
  );
}
