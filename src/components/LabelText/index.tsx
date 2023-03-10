
interface LabelTextProps {
  label: string,
  htmlFor: string
}

export const LabelText = ({ label, htmlFor }: LabelTextProps) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
  )
}