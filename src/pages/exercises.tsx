import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SubmitButton } from "@/components/SubmitButton";
import { Title } from "@/components/Title";

export default function ExercisesPage() {
  return (
    <Container>
      <Title text="Exercícios" />

      <ContentContainer>
        <Form onSubmit={() => {}}>
          <FormInputArea>
            <InputText 
              name="name"
              id="name"
              htmlFor="name"
              label="Exercício"
            />
            <InputText 
              name="reps"
              id="reps"
              htmlFor="reps"
              label="Repetições"
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