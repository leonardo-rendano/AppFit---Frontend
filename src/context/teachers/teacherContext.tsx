import { Api } from "@/service/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { TeacherProps, TeachersContextProps, TeachersContextProviderProps } from "./types";

export const TeachersContext = createContext({} as TeachersContextProps)

export default function TeachersContextProvider({ children }: TeachersContextProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)

  async function createNewTeacher(data: TeacherProps) {
    await Api.post('/teacher', {
      name: data.name,
      register: data.register,
      cpf: data.cpf,
      turn: data.turn
    })
  }

  return (
    <TeachersContext.Provider value={{
      isTableShown,
      setIsTableShown,
      createNewTeacher
    }}>
      {children}
    </TeachersContext.Provider>
  )
}