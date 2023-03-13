import { ReactNode } from "react"

interface FormProps {
  children: ReactNode,
  onSubmit: () => void
}

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="overflow-hidden shadow sm:rounded-md">
        {children}
      </div>
    </form>
  )
}