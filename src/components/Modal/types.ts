import { StudentsProps } from "@/context/students/types"
import { TeacherProps } from "@/context/teachers/types"

export interface CustomModalProps {
  isOpen: boolean,
  onRequestClose: () => void
  data: ModalItemProps
}

export interface ModalItemProps extends StudentsProps, TeacherProps {
  modalItem: StudentsProps | TeacherProps
}