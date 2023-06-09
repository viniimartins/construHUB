import {
  Container,
  ContainerText,
  ContainerButton,
  Rights,
  Text,
} from "./styles";

import HubImg from "../../assets/Hub.svg";
import { AiOutlineInstagram } from "react-icons/ai";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <img src={HubImg} alt="" />
        <Text>
          Conectando investidores a <br />
          profissionais da construção civil.
        </Text>
        <Rights>Todos os direitos reservados. C 2023</Rights>
      </ContainerText>
      <ContainerButton>
        <input type="button" value="Entrar em contato" />
        <p>
          @constru.hub 
        </p>
      </ContainerButton>
    </Container>
  );
}
