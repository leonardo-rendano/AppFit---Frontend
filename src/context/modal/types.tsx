import { ModalItemProps } from "@/components/Modal/types"
import { ReactNode } from "react"

export interface ModalContextProps {
  isModalVisible: boolean,
  handleOpenModal: (id?: string) => void,
  modalItems: ModalItemProps,
  handleCloseModal: () => void,
  openTeacherModal: (id: string) => void
}

export interface ModalContextProviderProps {
  children: ReactNode
}

