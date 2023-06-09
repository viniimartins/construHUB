import { FooterForm } from "../../componets/FooterForm";
import { FormInput } from "../../componets/FormInput";
import { Header } from "../../componets/Header";
import { TextForm } from "../../componets/TextForm/TextForm";
import { Container, ContainerContent } from "./styles";

export function Form() {
  return (
    <Container>
      <ContainerContent>
        <TextForm />
        <FormInput />
        <Header />
      </ContainerContent>
    </Container>
  );
}
