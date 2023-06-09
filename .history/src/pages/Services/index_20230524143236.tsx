import { TextService } from "../../componets/TextService";
import { WheelServices } from "../../componets/WheelService";
import { Container } from "./styles";

export const Services: React.FC = () => {
  return (
    <Container>
      <TextService />
      <WheelServices />;
    </Container>
  );
};
