import { StudentsProps } from "@/context/students/types"
import { TeacherProps } from "@/context/teachers/types"
import { ReactNode } from "react"

export interface CustomModalProps {
  isOpen: boolean,
  onRequestClose: () => void
  data: ModalItemProps,
  children: ReactNode
}

export interface ModalItemProps extends StudentsProps, TeacherProps {
  modalItem: StudentsProps | TeacherProps
}