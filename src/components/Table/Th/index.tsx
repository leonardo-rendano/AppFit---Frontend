import { ReactNode } from "react"

interface ThProps {
  children: ReactNode
}

export const Th = ({ children }: ThProps) => {
  return (
    <td className="p-3 text-sm font-semibold tracking-wide text-left">
      {children}
    </td>
  )
}