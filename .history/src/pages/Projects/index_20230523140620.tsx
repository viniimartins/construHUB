import { Project } from "../../componets/Project";
import { Container } from "./style";

import project1 from "../../assets/project1.png";

export function Projets() {
  return (
    <Container>
      <p>Nossos Projetos</p>
      <Project
        picImg={project1}
        meters="8100 m2 de obra"
        name=""
        apartaments=""
      />
    </Container>
  );
}
