import { ReactNode } from "react"

interface THeadProps {
  children: ReactNode
}

export const TableHead = ({ children }: THeadProps) => {
  return (
    <thead className="bg-gray-50 my-6 w-full border shadow sm:rounded-md">
      {children}
    </thead>
  )
}