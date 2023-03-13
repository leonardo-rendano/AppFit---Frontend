import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SubmitButton } from "@/components/SubmitButton";
import { Title } from "@/components/Title";

export default function StudentsPage() {
  return (
    <Container>
      <Title text='Alunos' />

      <ContentContainer>
        <Form onSubmit={() => { }}>
          <FormInputArea>
            <InputText
              name="nome"
              id="nome"
              label="Nome"
              htmlFor="nome"
            />
            <InputText
              name="email"
              id="email"
              label="E-mail"
              htmlFor="email"
            />
            <InputText
              name="rg"
              id="rg"
              label="RG"
              htmlFor="rg"
            />
            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
            />
            <InputText
              name="endereço"
              id="endereço"
              label="Endereço"
              htmlFor="endereço"
            />
            <InputText
              name="contato"
              id="contato"
              label="Contato"
              htmlFor="contato"
            />
            <InputText
              name="objetivo"
              id="objetivo"
              label="Objetivo"
              htmlFor="objetivo"
            />
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