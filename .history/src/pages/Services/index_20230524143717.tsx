import { TextService } from "../../componets/TextService";
import { WheelServices } from "../../componets/WheelService";
import { Container } from "./styles";

export function Services() {
  return (
    <Container>
      <TextService />
      <WheelServices />;
    </Container>
  );
}
