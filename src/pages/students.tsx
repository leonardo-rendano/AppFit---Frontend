import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Api } from "@/service/api";
import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SubmitButton } from "@/components/SubmitButton";
import { Table,  } from "@/components/Table";
import { Title } from "@/components/Title";
import { StudentsContext } from "@/context/students";
import { StudentsList } from "@/context/students/types";
import { BiEdit } from 'react-icons/bi'
import { CustomModal } from "@/components/Modal";
import { ModalContext } from "@/context/modal";
import { ModalStudentContent } from "@/components/ModalStudentContent";
import { TableBody } from "@/components/Table/TableBody";
import { TableHead } from "@/components/Table/TableHead";
import { TableRow } from "@/components/Table/TableRow";
import { Td } from "@/components/Table/Td";
import { Th } from "@/components/Table/Th";
import Head from "next/head";
import { toast } from "react-toastify";

export default function StudentsPage({ students }: StudentsList) {
  const initialValues = {
    name: '',
    email: '',
    rg: 0,
    cpf: 0,
    address: '',
    contact: 0,
    objective: ''
  }

  const { isTableShown, createNewStudent } = useContext(StudentsContext)
  const { handleOpenModal, isModalVisible, modalItems } = useContext(ModalContext)
  const [newStudent, setNewStudent] = useState(initialValues)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value })
  }

  const handleCreateNewStudent = (e: FormEvent) => {
    e.preventDefault()
    createNewStudent(newStudent)

    toast.success('Aluno cadastrado com sucesso!')

    setNewStudent(initialValues)
  }

  console.log(newStudent)

  return (
    <Container>
      <Head>
        <title>AppFit - Alunos</title>
      </Head>

      <Title text='Alunos' />

      <ContentContainer>
        <Form onSubmit={handleCreateNewStudent}>
          <FormInputArea>
            <InputText
              name="name"
              id="nome" 
              label="Nome"
              htmlFor="nome"
              value={newStudent.name}
              onChange={handleInputChange}
            />
            <InputText
              name="email"
              id="email"
              label="E-mail"
              htmlFor="email"
              value={newStudent.email}
              onChange={handleInputChange}
            />
            <InputText
              name="rg"
              id="rg"
              label="RG"
              htmlFor="rg"
              value={newStudent.rg}
              onChange={handleInputChange}
            />
            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
              value={newStudent.cpf}
              onChange={handleInputChange}
            />
            <InputText
              name="address"
              id="endereço"
              label="Endereço"
              htmlFor="endereço"
              value={newStudent.address}
              onChange={handleInputChange}
            />
            <InputText
              name="contact"
              id="contato"
              label="Contato"
              htmlFor="contato"
              value={newStudent.contact}
              onChange={handleInputChange}
            />
            <InputText
              name="objective"
              id="objetivo"
              label="Objetivo"
              htmlFor="objetivo"
              value={newStudent.objective}
              onChange={handleInputChange}
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
                      onClick={() => handleOpenModal(student.id)}
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
        <CustomModal>
          <ModalStudentContent data={modalItems} />
        </CustomModal>
      )}
    </Container>
  )
}

export const getServerSideProps = async () => {
  const response = await Api.get<StudentsList>('/student')

  return {
    props: {
      students: response.data,
    }
  }
}