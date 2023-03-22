import { useState } from "react"
import { ButtonArea } from "../ButtonArea"
import { Form } from "../Form"
import { FormInputArea } from "../FormInputArea"
import { InputText } from "../InputText"
import { SubmitButton } from "../SubmitButton"
import { Title } from "../Title"

export const ModalTeacherContent = ({ data }) => {
  const initialValues = {
    id: data.id,
    name: data.name,
    register: data.register,
    cpf: data.cpf,
    turn: data.turn
  }

  const [formValues, setFormValues] = useState(initialValues)

  console.log(formValues)

  return (
    <>
      <Title text="Dados do professor" />

      <Form onSubmit={() => {}}>
        <FormInputArea>
          <InputText 
            name="name"
            id="name"
            label="Nome"
            htmlFor="name"
            value={formValues.name}
            onChange={e => setFormValues({ ...formValues, name: e.target.value })}
          />
          <InputText 
            name="register"
            id="register"
            label="Registro"
            htmlFor="register"
            value={formValues.register}
            onChange={e => setFormValues({ ...formValues, register: e.target.value })}
          />
          <InputText 
            name="cpf"
            id="cpf"
            label="CPF"
            htmlFor="cpf"
            value={formValues.cpf}
            onChange={e => setFormValues({ ...formValues, cpf: e.target.value })}
          />
          <InputText 
            name="turn"
            id="turn"
            label="Turno"
            htmlFor="turn"
            value={formValues.turn}
            onChange={e => setFormValues({ ...formValues, turn: e.target.value })}
          />
        </FormInputArea>

        <ButtonArea>
          <SubmitButton>
            Editar
          </SubmitButton>
        </ButtonArea>
      </Form>
    </>
  )
}