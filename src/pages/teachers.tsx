import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useContext, useState } from "react";
import { Api } from "@/service/api";
import { TeachersList } from "@/context/teachers/types";
import { ButtonArea } from "@/components/ButtonArea";
import { Container } from "@/components/Container";
import { ContentContainer } from "@/components/ContentContainer";
import { Form } from "@/components/Form";
import { FormInputArea } from "@/components/FormInputArea";
import { InputText } from "@/components/InputText";
import { SelectInput } from "@/components/SelectInput";
import { SubmitButton } from "@/components/SubmitButton";
import { Table } from "@/components/Table";
import { TableBody } from "@/components/Table/TableBody";
import { TableHead } from "@/components/Table/TableHead";
import { TableRow } from "@/components/Table/TableRow";
import { Td } from "@/components/Table/Td";
import { Th } from "@/components/Table/Th";
import { Title } from "@/components/Title";
import { TeachersContext } from "@/context/teachers/teacherContext";
import { BiEdit, BiTrash } from "react-icons/bi";
import Head from "next/head";
import { toast } from "react-toastify";

const initialValues = {
  name: '',
  register: 0,
  cpf: 0,
  turn: ''
}

export default function TeachersPage({ teachers }: TeachersList) {
  const { isTableShown, createNewTeacher, removeTeacher } = useContext(TeachersContext)
  const [teachersList, setTeachersList] = useState(teachers || [])
  const [newTeacher, setNewTeacher] = useState(initialValues)
  const turnOptions = [
    { value: 'Manhã', text: 'Manhã' },
    { value: 'Tarde', text: 'Tarde' },
    { value: 'Noite', text: 'Noite' }
  ]

  const handleCreateNewTeacher = (e: FormEvent) => {
    e.preventDefault()
    createNewTeacher(newTeacher)
    setTeachersList(teachersList => [...teachersList, newTeacher])
    setNewTeacher(initialValues)
    toast.success('Professor cadastrado com sucesso!')
  }

  const handleRemoveTeacher = (teacher_id: string) => {
    removeTeacher(teacher_id)
    let updatedTeachersList = teachersList.filter(teacher => {
      return (teacher.id !== teacher_id)
    })
    setTeachersList(updatedTeachersList)
    toast.success('Professor removido com sucesso!')
  }

  return (
    <Container>
      <Head>
        <title>AppFit - Professores</title>
      </Head>

      <Title text="Professores" />

      <ContentContainer>
        <Form onSubmit={handleCreateNewTeacher}>
          <FormInputArea>
            <InputText
              name="name"
              id="nome"
              label="Nome"
              htmlFor="nome"
              value={newTeacher.name}
              onChange={e => setNewTeacher({ ...newTeacher, name: e.target.value })}
            />
            <InputText
              name="register"
              id="registro"
              label="Registro"
              htmlFor="registro"
              value={newTeacher.register}
              onChange={e => setNewTeacher({ ...newTeacher, register: parseInt(e.target.value) })}
            />
            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
              value={newTeacher.cpf}
              onChange={e => setNewTeacher({ ...newTeacher, cpf: parseInt(e.target.value) })}
            />
            <SelectInput
              id="turno"
              label="Turno"
              name="turno"
              htmlFor="turno"
              value={newTeacher.turn}
              onChange={e => setNewTeacher({ ...newTeacher, turn: e.target.value })}
            >
              {turnOptions.map(turn => {
                return (
                  <option
                    key={turn.text}
                  >{turn.text}
                  </option>
                )
              })}
            </SelectInput>
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
              <Th>Registro</Th>
              <Th>CPF</Th>
              <Th>Turno</Th>
              <Th>Opções</Th>
            </TableRow>
          </TableHead>
          <TableBody>
            {teachersList.map(teacher => {
              return (
                <TableRow key={teacher.id}>
                  <Td>{teacher.name}</Td>
                  <Td>{teacher.register}</Td>
                  <Td>{teacher.cpf}</Td>
                  <Td>{teacher.turn}</Td>
                  <Td>
                    <button 
                      className="cursor-pointer"
                      onClick={() => {}}
                    >
                      <BiEdit size={20}/>
                    </button>
                    <button
                      className="cursor-pointer ml-4"
                      onClick={() => handleRemoveTeacher(teacher.id)}
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

    </Container>
  )
}

export const getServerSideProps = async () => {
  const response = await Api.get<TeachersList>('/teacher')

  return {
    props: {
      teachers: response.data
    }
  }
}