import { ReactNode } from "react"

interface TBodyProps {
  children: ReactNode
}

export const TableBody = ({ children }: TBodyProps) => {
  return (
    <tbody className="divide-y divide-gray-100">
      {children}
    </tbody>
  )
}