import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { InputText } from "@/components/InputText";
import { SubmitButton } from "@/components/SubmitButton";
import { Title } from "@/components/Title";

export default function TeachersPage() {
  return (
    <Container>
      <Title text="Professores" />

      <ContentContainer>
        <Form onSubmit={() => { }}>
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

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="turno" className="block text-sm font-medium leading-6 text-gray-900">
              Turno
            </label>
            <select
              id="turno"
              name="turno"
              className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </div>
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