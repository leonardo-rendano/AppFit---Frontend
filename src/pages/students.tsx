import { Api } from "@/service/api";
import { useContext, useState } from "react";
import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SubmitButton } from "@/components/SubmitButton";
import { Table } from "@/components/Table";
import { TableBody } from "@/components/Table/TableBody";
import { TableHead } from "@/components/Table/TableHead";
import { TableRow } from "@/components/Table/TableRow";
import { Td } from "@/components/Table/Td";
import { Th } from "@/components/Table/Th";
import { Title } from "@/components/Title";
import { StudentsContext } from "@/context/students";
import { StudentsList } from "@/context/students/types";
import { BiEdit } from 'react-icons/bi'
import { CustomModal } from "@/components/Modal";
import { ModalContext } from "@/context/modal";

export default function StudentsPage({ students }: StudentsList) {
  const { isTableShown } = useContext(StudentsContext)
  const { handleOpenCloseModal, isModalVisible } = useContext(ModalContext)
  
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

      {isTableShown && (
        <Table>
          <TableHead>
            <TableRow>
              <Th>Nome</Th>
              <Th>Objetivo</Th>
              <Th>RG</Th>
              <Th>CPF</Th>
              <Th>Endereço</Th>
              <Th>Contato</Th>
              <Th>E-mail</Th>
              <Th>Editar</Th>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map(student => {
              return (
                <TableRow key={student.id}>
                  <Td>{student.name}</Td>
                  <Td>{student.objective}</Td>
                  <Td>{student.rg}</Td>
                  <Td>{student.cpf}</Td>
                  <Td>{student.address}</Td>
                  <Td>{student.contact}</Td>
                  <Td>{student.email}</Td>
                  <Td>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleOpenCloseModal(student.id)}
                    >
                      <BiEdit size={20}/>
                    </button>
                  </Td>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      )}

      {isModalVisible && (
        <CustomModal  
          isOpen={isModalVisible}
          onRequestClose={handleOpenCloseModal}
        />
      )}
    </Container>
  )
}

export const getServerSideProps = async () => {
  const response = await Api.get<StudentsList>('/student')

  return {
    props: {
      students: response.data
    }
  }
}