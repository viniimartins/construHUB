import {
  Apartments,
  Container,
  ContainerText,
  Meters,
  Name,
  ProjectLink,
} from "./style";

type PropsProject = {
  picImg: string;
  meters: string;
  name: string;
  apartments: string;
  linkProject: string;
};

export function Project({
  picImg,
  meters,
  name,
  apartments,
  linkProject,
}: PropsProject) {
  return (
    <Container>
      <img src={picImg} alt="" />
      <ContainerText>
        <Meters>{meters}</Meters>
        <Name>{name}</Name>
        <Apartments>{apartments}</Apartments>
        <ProjectLink href={linkProject}>
          <p>Ver projeto</p>
        </ProjectLink>
      </ContainerText>
    </Container>
  );
}
