import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SelectInput } from "@/components/SelectInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Title } from "@/components/Title";

export default function SetsPage() {
  return (
    <Container>
      <Title text="Séries" />

      <ContentContainer>
        <Form onSubmit={() => {}}>
          <FormInputArea>
            <SelectInput
              label="Tipo de exercício"
              id="exercise"
              htmlFor="exercise"
              name="exercise"
            >
              <option value="hipertrophy">Hipertrofia</option>
              <option value="strenght training">Treinamento de força</option>
              <option value="aerobic">Aeróbico</option>
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