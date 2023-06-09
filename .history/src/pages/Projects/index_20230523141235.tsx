import { Container , ContainerProjets} from "./style";

import project1 from "../../assets/project1.png";

export function Projets() {
  return (
    <Container>
      <p>Nossos Projetos</p>
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
