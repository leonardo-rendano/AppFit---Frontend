import { ReactNode } from "react"

interface FormInputAreaProps {
  children: ReactNode
}

export const FormInputArea = ({ children }: FormInputAreaProps) => {
  return (
    <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        {children}
      </div>
    </div>
  )
}