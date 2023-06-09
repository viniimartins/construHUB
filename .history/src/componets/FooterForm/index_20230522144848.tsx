import { Container, ContainerButton, ContainerInputs, ContainerText } from "./styles";

export function FooterForm() {
  return (
    <Container>
      <ContainerText>
        <p>
          Cadastre-se para fazer parte de um lançamento imobiliário. Nosso time
          irá te contatar e mostrar as opções de empreendimento com cotas em
          aberto para investidores.
        </p>
      </ContainerText>
      <ContainerInputs>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Telefone" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="Valor aproximado de aporte" />
      </ContainerInputs>
      <ContainerButton>
        <input type="button">Quero investir</input>
      </ContainerButton>
    </Container>
  );
}
