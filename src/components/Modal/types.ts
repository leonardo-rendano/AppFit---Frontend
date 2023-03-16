import { StudentsProps } from "@/context/students/types"
import { TeacherProps } from "@/context/teachers/types"
import { ReactNode } from "react"

export interface CustomModalProps {
  children: ReactNode
}

export interface ModalItemProps extends StudentsProps, TeacherProps {
  modalItem: StudentsProps | TeacherProps
}