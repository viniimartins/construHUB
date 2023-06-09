import {
  Apartments,
  Container,
  ContainerText,
  Meters,
  Name,
  ProjectLink,
} from "./style";

import project1 from "../../assets/project1.png";

export function Project({ meters, name, apartments }) {
  return (
    <Container>
      <img src={project1} alt="" />
      <ContainerText>
        <Meters>{meters}</Meters>
        <Name>{name}</Name>
        <Apartments>{apartments}</Apartments>
        <ProjectLink href="">
          <p>Ver projeto</p>
        </ProjectLink>
      </ContainerText>
    </Container>
  );
}
