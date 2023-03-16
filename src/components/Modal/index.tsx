import Modal  from 'react-modal'
import React from "react"
import { CustomModalProps } from './types';
import { InputText } from '../InputText';
import { FormInputArea } from '../FormInputArea';

export const CustomModal = ({ isOpen, onRequestClose, data }: CustomModalProps) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(34, 31, 31, 0.75)'
        },
        content: {
          top: '50%',
          bottom: 'auto',
          left: '50%',
          right: 'auto',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          width: '70vw',
          height: '70vh'
        }
      }}
    >
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
    </Modal>
  )
}