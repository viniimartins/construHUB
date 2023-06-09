import { WheelServices } from "../../componets/WheelService";
import { Container, ContainerText } from "./styles";

export const Services: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <p>Nossos serviços</p>
        <p>
          Todas as etapas da construção civil em um só lugar. Cada profissional
          da hub é qualificados e com vasta experiência em sua área de atuação.
        </p>
      </ContainerText>
      <WheelServices />;
    </Container>
  );
};
