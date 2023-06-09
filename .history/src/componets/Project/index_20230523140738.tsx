import {
  Apartments,
  Container,
  ContainerText,
  Meters,
  Name,
  ProjectLink,
} from "./style";

import project1 from "../../assets/project1.png";

export function Project({ name , meters , apartments }) {
  return (
    <Container>
      <img src={project1} alt="" />
      <ContainerText>
        <Meters>8100 m2 de obra</Meters>
        <Name>{name}</Name>
        <Apartments>68 apartamentos</Apartments>
        <ProjectLink href="">
          <p>Ver projeto</p>
        </ProjectLink>
      </ContainerText>
    </Container>
  );
}
