import { createContext, useState } from "react";
import { TeachersContextProps, TeachersContextProviderProps } from "./types";

export const TeachersContext = createContext({} as TeachersContextProps)

export default function TeachersContextProvider({ children }: TeachersContextProviderProps) {
  const [isTableShown, setIsTableShown] = useState(false)
  const [data, setData] = useState([])

  return (
    <TeachersContext.Provider value={{
      isTableShown,
      setIsTableShown
    }}>
      {children}
    </TeachersContext.Provider>
  )
}