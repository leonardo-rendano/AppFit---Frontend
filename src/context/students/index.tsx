import { Api } from "@/service/api";
import { useState, createContext } from "react";
import { StudentsContextProps, StudentsList, StudentsProps, StudentsProviderProps } from "./types";

export const StudentsContext = createContext({} as StudentsContextProps)

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)

  const createNewStudent = async (data: StudentsProps) => {
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

  return (
    <StudentsContext.Provider value={{
      isTableShown,
      setIsTableShown,
      createNewStudent,
    }}>
      {children}
    </StudentsContext.Provider>
  )
}