import { FormEvent, useContext, useState } from "react";
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
import { BiEdit, BiTrash } from 'react-icons/bi'
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

const initialValues = {
  name: '',
  email: '',
  rg: 0,
  cpf: 0,
  address: '',
  contact: 0,
  objective: ''
}

export default function StudentsPage({ students }: StudentsList) {
  const { isTableShown, createNewStudent, deleteStudent } = useContext(StudentsContext)
  const { handleOpenModal, isModalVisible, modalItems } = useContext(ModalContext)
  const [newStudent, setNewStudent] = useState(initialValues)
  const [studentsList, setStudentsList] = useState(students || [])

  const handleCreateNewStudent = (e: FormEvent) => {    
    e.preventDefault()
    createNewStudent(newStudent)
    setStudentsList(studentsList => [...studentsList, newStudent])
    setNewStudent(initialValues)
    toast.success('Aluno cadastrado com sucesso!')
  }

  const handleDeleteStudent = (id: string) => {
    deleteStudent(id)
    let updatedStudentList = studentsList.filter(student => {
      return (student.id !== id)
    })
    setStudentsList(updatedStudentList)
    toast.success('Aluno removido com sucesso!')
  }

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
              onChange={e => (setNewStudent({ ...newStudent, name: e.target.value}))}
            />
            <InputText
              name="email"
              id="email"
              label="E-mail"
              htmlFor="email"
              value={newStudent.email}
              onChange={e => (setNewStudent({ ...newStudent, email: e.target.value}))}
            />
            <InputText
              name="rg"
              id="rg"
              label="RG"
              htmlFor="rg"
              value={newStudent.rg}
              onChange={e => (setNewStudent({ ...newStudent, rg: parseInt(e.target.value)}))}
            />
            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
              value={newStudent.cpf}
              onChange={e => (setNewStudent({ ...newStudent, cpf: parseInt(e.target.value)}))}
            />
            <InputText
              name="address"
              id="endereço"
              label="Endereço"
              htmlFor="endereço"
              value={newStudent.address}
              onChange={e => (setNewStudent({ ...newStudent, address: e.target.value}))}
            />
            <InputText
              name="contact"
              id="contato"
              label="Contato"
              htmlFor="contato"
              value={newStudent.contact}
              onChange={e => (setNewStudent({ ...newStudent, contact: parseInt(e.target.value)}))}
            />
            <InputText
              name="objective"
              id="objetivo"
              label="Objetivo"
              htmlFor="objetivo"
              value={newStudent.objective}
              onChange={e => (setNewStudent({ ...newStudent, objective: e.target.value}))}
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
            </TableRow>
          </TableHead>

          <TableBody>
            {studentsList?.map(student => {
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
                    <button
                      className="cursor-pointer ml-4"
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      <BiTrash size={20} color="#d90808"/>
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