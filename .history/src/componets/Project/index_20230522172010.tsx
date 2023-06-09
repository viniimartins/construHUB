import { Container, ContainerText } from "./style";
import project1 from "../../assets/project1.png"

export function Project() {
  return (
    <Container>
      <img src={project1} alt="" />
      <ContainerText>
        <p>8100 m2 de obra</p>
        <p>Berlim</p>
        <p>68 apartamentos</p>
        <a href="">
          <p>Ver projeto</p>
        </a>
      </ContainerText>
    </Container>
  );
}
