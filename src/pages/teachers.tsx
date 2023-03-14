import { useContext } from "react";
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
import { useEffect } from "react";
import { Api } from "@/service/api";

export default function TeachersPage({ teachers }) {
  const { isTableShown } = useContext(TeachersContext)


  return (
    <Container>
      <Title text="Professores" />

      <ContentContainer>
        <Form onSubmit={() => {}}>
          <FormInputArea>
            <InputText
              name="nome"
              id="nome"
              label="Nome"
              htmlFor="nome"
            />

            <InputText
              name="registro"
              id="registro"
              label="Registro"
              htmlFor="registro"
            />

            <InputText
              name="cpf"
              id="cpf"
              label="CPF"
              htmlFor="cpf"
            />

            <SelectInput
              id="turno"
              label="Turno"
              name="turno"
              htmlFor="turno"
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {teachers.map(teacher => {
              return (
                <TableRow key={teacher.id}>
                  <Td>{teacher.name}</Td>
                  <Td>{teacher.register}</Td>
                  <Td>{teacher.cpf}</Td>
                  <Td>{teacher.turn}</Td>
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
  const response = await Api.get('/teacher')

  return {
    props: {
      teachers: response.data
    }
  }
}