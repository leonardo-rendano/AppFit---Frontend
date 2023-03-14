import { useState, createContext } from "react";
import { StudentsContextProps, StudentsProviderProps } from "./types";

export const StudentsContext = createContext({} as StudentsContextProps)

export function StudentsContextProvider({ children }: StudentsProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)

  return (
    <StudentsContext.Provider value={{
      isTableShown,
      setIsTableShown
    }}>
      {children}
    </StudentsContext.Provider>
  )
}