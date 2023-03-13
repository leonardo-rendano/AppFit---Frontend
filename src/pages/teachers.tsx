import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SelectInput } from "@/components/SelectInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Title } from "@/components/Title";

export default function TeachersPage() {
  return (
    <Container>
      <Title text="Professores" />

      <ContentContainer>
        <Form onSubmit={() => {}}>
          <FormInputArea>
            <InputText
              name="nome"
              id="nome"
              label="Nome"
              htmlFor="nome"
            />

            <InputText
              name="registro"
              id="registro"
              label="Registro"
              htmlFor="registro"
            />

            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
            />

            <SelectInput
              id="turno"
              label="Turno"
              name="turno"
              htmlFor="turno"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </SelectInput>
          </FormInputArea>

          <ButtonArea>
            <SubmitButton>
              Cadastrar
            </SubmitButton>
          </ButtonArea>

        </Form>

      </ContentContainer>

    </Container>
  )
}