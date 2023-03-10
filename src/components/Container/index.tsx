import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-5/6 m-auto mt-20">
      {children}
    </div>
  )
}