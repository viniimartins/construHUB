import { WheelServices } from "../../componets/WheelService";
import { Container, ContainerText, Title } from "./styles";

export const Services: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <h1>Nossos serviços</h1>
        <p>
          Todas as etapas da construção civil em um só lugar. Cada <br />
          profissional da hub é qualificados e com vasta experiência <br />
          em sua área de atuação.
        </p>
      </ContainerText>
      <WheelServices />;
    </Container>
  );
};
