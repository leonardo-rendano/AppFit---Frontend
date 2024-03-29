import { Dispatch, ReactNode, SetStateAction } from "react";

export interface TeacherProps {
  id?: string,
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
  createNewTeacher: (data: TeacherProps) => Promise<void>
  removeTeacher: (teacher_id: string) => Promise<void>
  updateTeacher: (data: TeacherProps) => Promise<void>
 }

export interface TeachersContextProviderProps {
  children: ReactNode
}

