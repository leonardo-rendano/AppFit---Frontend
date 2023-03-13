import { ReactNode } from "react"
import { LabelText } from "../LabelText"

interface SelectInputProps {
  label: string,
  htmlFor: string
  id: string,
  name: string,
  children: ReactNode
}

export const SelectInput = ({ label, htmlFor, id, name, children }: SelectInputProps) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <LabelText label={label} htmlFor={htmlFor} />
      <select
        id={id}
        name={name}
        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        {children}
      </select>
    </div>
  )
}