import { Api } from "@/service/api";
import { createContext, useState } from "react";
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

  async function removeTeacher(teacher_id: string) {
    await Api.delete('/teacher/:id', {
      params: {
        teacher_id: teacher_id
      }
    })
  }

  async function updateTeacher(data: TeacherProps) {
    await Api.patch('/teacher', {
      id: data.id,
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
      createNewTeacher,
      removeTeacher,
      updateTeacher
    }}>
      {children}
    </TeachersContext.Provider>
  )
}