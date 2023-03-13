import { createContext, ReactNode, useState } from "react";

interface TeachersContextProps {
  
}

interface ITableProps {
  isTableShown: boolean,
  setIsTableShown: () => void
}

interface TeachersContextProviderProps {
  children: ReactNode
}

export const TeachersContext = createContext({} as TeachersContextProps)

export default function TeachersContextProvider({ children }: TeachersContextProviderProps) {
  const [isTableShown, setIsTableShown] = useState<ITableProps>()

  return (
    <TeachersContext.Provider value={{
      isTableShown,
      setIsTableShown
    }}>
      {children}
    </TeachersContext.Provider>
  )
}