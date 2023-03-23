import { ModalContext } from "@/context/modal"
import { StudentsContext } from "@/context/students"
import React, { FormEvent, useContext, useState } from "react"
import { toast } from "react-toastify"
import { ButtonArea } from "../ButtonArea"
import { Form } from "../Form"
import { FormInputArea } from "../FormInputArea"
import { InputText } from "../InputText"
import { SubmitButton } from "../SubmitButton"
import { Title } from "../Title"

export const ModalStudentContent = ({ data }) => {
  const initialValues = {
    id: data.id,
    name: data.name,
    email: data.email,
    rg: data.rg,
    cpf: data.cpf,
    address: data.address,
    contact: data.contact,
    objective: data.objective
  }
  const { updateStudent } = useContext(StudentsContext)
  const { handleCloseModal } = useContext(ModalContext)
  const [formValues, setFormValues] = useState(initialValues)

  const handleUpdateStudent = (e: FormEvent) => {
    e.preventDefault()
    updateStudent(formValues)
    toast.success('Dados do aluno atualizados!')
    handleCloseModal()
  }

  return (
    <>
      <Title text="Dados do aluno" />

      <Form onSubmit={handleUpdateStudent}>
        <FormInputArea>
          <InputText
            name="nome"
            id="nome"
            label="Nome"
            htmlFor="nome"
            value={formValues.name}
            onChange={e => setFormValues({ ...formValues, name: e.target.value })}
          />
          <InputText
            name="email"
            id="email"
            label="E-mail"
            htmlFor="email"
            value={formValues.email}
            onChange={e => setFormValues({ ...formValues, email: e.target.value })}
          />
          <InputText
            name="rg"
            id="rg"
            label="RG"
            htmlFor="rg"
            value={formValues.rg}
            onChange={e => setFormValues({ ...formValues, rg: e.target.value })}
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
            name="endereço"
            id="endereço"
            label="Endereço"
            htmlFor="endereço"
            value={formValues.address}
            onChange={e => setFormValues({ ...formValues, address: e.target.value })}
          />
          <InputText
            name="contato"
            id="contato"
            label="Contato"
            htmlFor="contato"
            value={formValues.contact}
            onChange={e => setFormValues({ ...formValues, contact: e.target.value })}
          />
          <InputText
            name="objetivo"
            id="objetivo"
            label="Objetivo"
            htmlFor="objetivo"
            value={formValues.objective}
            onChange={e => setFormValues({ ...formValues, objective: e.target.value })}
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