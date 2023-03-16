import React from "react"
import { ButtonArea } from "../ButtonArea"
import { Form } from "../Form"
import { FormInputArea } from "../FormInputArea"
import { InputText } from "../InputText"
import { SubmitButton } from "../SubmitButton"
import { Title } from "../Title"

export const ModalStudentContent = ({ data }) => {
  return (
    <>
      <Title text="Dados do aluno" />
      
      <FormInputArea>
        <InputText
          name="nome"
          id="nome"
          label="Nome"
          htmlFor="nome"
          value={data.name}

        />
        <InputText
          name="email"
          id="email"
          label="E-mail"
          htmlFor="email"
          value={data.email}
        />
        <InputText
          name="rg"
          id="rg"
          label="RG"
          htmlFor="rg"
          value={data.rg}
        />
        <InputText
          name="cpf"
          id="cpf"
          label="CPF"
          htmlFor="cpf"
          value={data.cpf}
        />
        <InputText
          name="endereço"
          id="endereço"
          label="Endereço"
          htmlFor="endereço"
          value={data.address}
        />
        <InputText
          name="contato"
          id="contato"
          label="Contato"
          htmlFor="contato"
          value={data.contact}
        />
        <InputText
          name="objetivo"
          id="objetivo"
          label="Objetivo"
          htmlFor="objetivo"
          value={data.objective}
        />

      </FormInputArea>
      <div className="w-full flex justify-end">
        <SubmitButton>
          Editar
        </SubmitButton>

      </div>
      
      
    </>
  )
}