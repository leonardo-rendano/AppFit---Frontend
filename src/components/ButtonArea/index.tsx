import { ReactNode } from "react"

interface ButtonAreaProps {
  children: ReactNode
}

export const ButtonArea = ({ children }: ButtonAreaProps) => {
  return (
    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
      {children}
    </div>
  )
}