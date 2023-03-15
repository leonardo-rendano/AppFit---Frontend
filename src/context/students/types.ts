import { Dispatch, ReactNode, SetStateAction } from "react"

export interface StudentsContextProps {
  isTableShown: boolean,
  setIsTableShown: Dispatch<SetStateAction<boolean>>
  isModalVisible: boolean,
  handleOpenCloseModal: () => void
}

export interface StudentsProviderProps {
  children: ReactNode
}

export interface StudentsProps {
  id: number,
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
  map(arg0: (teacher: StudentsProps) => JSX.Element): ReactNode;
  isOpen: boolean
}

export interface ModalItemProps {
  modalItem: StudentsProps
}

