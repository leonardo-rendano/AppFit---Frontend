import { Api } from "@/service/api";
import { useState, createContext } from "react";
import { StudentsContextProps, StudentsProps, StudentsProviderProps } from "./types";

export const StudentsContext = createContext({} as StudentsContextProps)

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)

  async function createNewStudent(data: StudentsProps) {
    await Api.post('/student', {
      name: data.name,
      email: data.email,
      rg: data.rg,
      cpf: data.cpf,
      address: data.address,
      contact: data.contact,
      objective: data.objective
    })
  }

  async function updateStudent(data: StudentsProps) {
    await Api.patch("/student", {
      id: data.id,
      name: data.name,
      email: data.email,
      rg: data.rg,
      cpf: data.cpf,
      address: data.address,
      contact: data.contact,
      objective: data.objective
    })
  }
  

  async function deleteStudent(id: string) {
    await Api.delete('/student/:id', {
      params: {
        id: id
      }
    })
  }

  return (
    <StudentsContext.Provider value={{
      isTableShown,
      setIsTableShown,
      createNewStudent,
      deleteStudent,
      updateStudent
    }}>
      {children}
    </StudentsContext.Provider>
  )
}