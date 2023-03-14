import { ReactNode } from "react"

interface TableProps {
  children: ReactNode
}

export const Table = ({ children }: TableProps) => {
  return (
    <table className=" my-6 w-full border shadow sm:rounded-md ">
      {children}
    </table>
  )
}