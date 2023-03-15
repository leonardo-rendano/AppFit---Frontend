import { createContext, useState } from "react";
import { ModalContextProps, ModalContextProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps)

export default function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOpenCloseModal = (id: number) => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <ModalContext.Provider value={{
      isModalVisible,
      handleOpenCloseModal,
    }}>
      {children}
    </ModalContext.Provider>
  )
}