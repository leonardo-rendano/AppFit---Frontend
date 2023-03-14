import { Api } from "@/service/api";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { TeachersContextProps, TeachersContextProviderProps, TeachersList } from "./types";

export const TeachersContext = createContext({} as TeachersContextProps)

export default function TeachersContextProvider({ children }: TeachersContextProviderProps) {
  const [isTableShown, setIsTableShown] = useState(true)

  return (
    <TeachersContext.Provider value={{
      isTableShown,
      setIsTableShown,
    }}>
      {children}
    </TeachersContext.Provider>
  )
}