import { Dispatch, ReactNode, SetStateAction } from "react";

export interface TeachersContextProps {
  isTableShown: boolean
  setIsTableShown: Dispatch<SetStateAction<boolean>>
}

export interface TeachersContextProviderProps {
  children: ReactNode
}