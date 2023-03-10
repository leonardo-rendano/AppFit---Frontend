import { LabelText } from "../LabelText"

interface InputTextProps {
  name: string,
  id: string,
  label: string,
  htmlFor: string
}

export const InputText = ({ name, id, label, htmlFor }: InputTextProps) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <LabelText htmlFor={htmlFor} label={label} />
      <input
        type="text"
        name={name}
        id={id}
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  )
}