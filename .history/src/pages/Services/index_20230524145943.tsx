import { Container } from "./styles";
import { TextService } from "../../componets/TextService";
import { WheelServices } from "../../componets/WheelService";

export function Services() {
  return (
    <Container>
      <TextService />
      <div>
      <WheelServices />;

      </div>
    </Container>
  );
}
