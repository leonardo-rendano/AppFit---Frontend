import { ModalItemProps } from "@/components/Modal/types";
import { Api } from "@/service/api";
import { createContext, useState } from "react";
import { ModalContextProps, ModalContextProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps)

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalItems, setModalItems] = useState<ModalItemProps>()

  const handleOpenModal = async (id: number) => {
    const studentInfo = await Api.get('/students/:id', {
      params: {
        id: id
      }
    })
    
    setModalItems(studentInfo.data)
    setIsModalVisible(true)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <ModalContext.Provider value={{
      isModalVisible,
      handleOpenModal,
      modalItems,
      handleCloseModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}