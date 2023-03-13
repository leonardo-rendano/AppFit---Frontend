import { ReactNode } from "react"

interface FormProps {
  children: ReactNode,
  onSubmit: () => void
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            {children}
          </div>
        </div>
      </div>
    </form>
  )
}