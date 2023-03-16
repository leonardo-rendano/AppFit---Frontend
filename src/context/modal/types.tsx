import { ModalItemProps } from "@/components/Modal/types"
import { ReactNode } from "react"

export interface ModalContextProps {
  isModalVisible: boolean,
  handleOpenModal: (id?: number) => void,
  modalItems: ModalItemProps,
  handleCloseModal: () => void
}

export interface ModalContextProviderProps {
  children: ReactNode
}

