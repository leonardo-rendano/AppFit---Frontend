interface TitleProps {
  text: string
}

export const Title = ({ text }: TitleProps) => {
  return (
    <div className="py-4">
        <h1 className=" text-2xl">{text}</h1>
      </div>
  )
}