import { ReactNode } from "react"

interface SubmitButtonProps {
  children: ReactNode
}

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="inline-flex justify-center rounded-md bg-lime-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      {children}
    </button>
  )
}