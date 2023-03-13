import { ReactNode } from "react"

interface TableDataProps {
  children: ReactNode
}

export const Td = ({ children }: TableDataProps) => {
  return (
    <td className="p-3 text-sm text-gray-700">
      {children}
    </td>
  )
}