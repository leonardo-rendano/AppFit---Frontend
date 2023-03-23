import { ModalContext } from "@/context/modal"
import { TeachersContext } from "@/context/teachers/teacherContext"
import { FormEvent, useContext, useState } from "react"
import { toast } from "react-toastify"
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
  const { updateTeacher } = useContext(TeachersContext)
  const { handleCloseModal } = useContext(ModalContext)
  const [formValues, setFormValues] = useState(initialValues)

  const handleEditTeacher = (e: FormEvent) => {
    e.preventDefault()
    updateTeacher(formValues)
    toast.success('Dados do professor atualizados!')
    handleCloseModal()
  }

  return (
    <>
      <Title text="Dados do professor" />

      <Form onSubmit={handleEditTeacher}>
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
            onChange={e => setFormValues({ ...formValues, register: parseInt(e.target.value) })}
          />
          <InputText 
            name="cpf"
            id="cpf"
            label="CPF"
            htmlFor="cpf"
            value={formValues.cpf}
            onChange={e => setFormValues({ ...formValues, cpf: parseInt(e.target.value) })}
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