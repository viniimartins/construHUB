import { Project } from "../../componets/Project";
import { Container , ContainerProjets, Text} from "./style";

import project1 from "../../assets/project1.png";

export function Projets() {
  return (
    <Container>
      <Text>Nossos Projetos</Text>
      <ContainerProjets>
        <Project
          picImg={project1}
          meters="8100 m2 de obra"
          name="Berlin"
          apartments="68 apartamentos"
          linkProject="teste"
        />
        <Project
          picImg={project1}
          meters="8100 m2 de obra"
          name="Berlin"
          apartments="68 apartamentos"
          linkProject="teste"
        />
        <Project
          picImg={project1}
          meters="8100 m2 de obra"
          name="Berlin"
          apartments="68 apartamentos"
          linkProject="teste"
        />
      </ContainerProjets>
    </Container>
  );
}
