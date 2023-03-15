import { useState, createContext } from "react";
import { ModalItemProps, StudentsContextProps, StudentsProviderProps } from "./types";

export const StudentsContext = createContext({} as StudentsContextProps)

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalItem, setIsModalItem] = useState<ModalItemProps>()

  const handleOpenCloseModal = () => {
    setIsModalVisible(true)
    alert('Modal aberto')
  }

  return (
    <StudentsContext.Provider value={{
      isTableShown,
      setIsTableShown,
      isModalVisible,
      handleOpenCloseModal,
    }}>
      {children}
    </StudentsContext.Provider>
  )
}