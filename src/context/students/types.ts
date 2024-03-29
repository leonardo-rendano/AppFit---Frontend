import { Dispatch, ReactNode, SetStateAction } from "react"

export interface StudentsContextProps {
  isTableShown: boolean,
  setIsTableShown: Dispatch<SetStateAction<boolean>>
  createNewStudent: (data: StudentsProps) => Promise<void>
  deleteStudent: (id: string) => Promise<void>
  updateStudent: (data: StudentsProps) => Promise<void>
}

export interface StudentsProviderProps {
  children: ReactNode
}

export interface StudentsProps {
  id?: string,
  name: string,
  objective: string,
  rg: number,
  cpf: number,
  address: string,
  contact: number,
  email: string
}

export interface StudentsList {
  students: StudentsProps[]
  map(arg0: (student: StudentsProps) => JSX.Element): ReactNode;
}


