import { Dispatch, ReactNode, SetStateAction } from "react";

export interface TeacherProps {
  id: number,
  name: string,
  register: number,
  cpf: number,
  turn: string
}

export interface TeachersList {
  map(arg0: (teacher: TeacherProps) => JSX.Element): ReactNode;
  teachers: TeacherProps[]
}

export interface TeachersContextProps {
  isTableShown: boolean
  setIsTableShown: Dispatch<SetStateAction<boolean>>
 }

export interface TeachersContextProviderProps {
  children: ReactNode
}