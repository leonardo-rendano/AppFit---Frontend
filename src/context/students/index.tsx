import { Api } from "@/service/api";
import { useState, createContext } from "react";
import { StudentsContextProps, StudentsProps, StudentsProviderProps } from "./types";

export const StudentsContext = createContext({} as StudentsContextProps)

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)
  const [student, setStudent] = useState({})

  const createNewStudent = async (data: StudentsProps) => {
    const newStudent = await Api.post('/student', {
      name: data.name,
      email: data.email,
      rg: data.rg,
      cpf: data.cpf,
      address: data.address,
      contact: data.contact,
      objective: data.objective
    })

    setStudent({ ...student, newStudent })
  }

  return (
    <StudentsContext.Provider value={{
      isTableShown,
      setIsTableShown,
      createNewStudent
    }}>
      {children}
    </StudentsContext.Provider>
  )
}