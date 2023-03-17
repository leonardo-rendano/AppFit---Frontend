import { FormEvent, ReactNode } from "react"

interface FormProps {
  children: ReactNode,
  onSubmit: (e: FormEvent) => void
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