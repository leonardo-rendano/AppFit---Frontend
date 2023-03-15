import { ReactNode } from "react"

export interface ModalContextProps {
  isModalVisible: boolean,
  handleOpenCloseModal: (id?: number) => void,
}

export interface ModalContextProviderProps {
  children: ReactNode
}

