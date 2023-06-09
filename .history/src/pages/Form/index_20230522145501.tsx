import { FooterForm, FormInput } from "../../componets/FormInput";
import { TextForm } from "../../componets/TextForm/TextForm";
import { Container, ContainerContent } from "./styles";

export function Form() {
  return (
    <Container>
      <ContainerContent>
        <TextForm />
        
        <FormInput />
      </ContainerContent>
    </Container>
  );
}
