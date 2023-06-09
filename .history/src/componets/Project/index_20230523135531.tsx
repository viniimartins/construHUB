import { Container, ContainerText, Meters, Name } from "./style";
import project1 from "../../assets/project1.png";

export function Project() {
  return (
    <Container>
      <img src={project1} alt="" />
      <ContainerText>
        <Meters>8100 m2 de obra</Meters>
        <Name>Berlim</Name>
        <Apartments>68 apartamentos</Apartments>
        <Project href="">
          <p>Ver projeto</p>
        </Project>
      </ContainerText>
    </Container>
  );
}
