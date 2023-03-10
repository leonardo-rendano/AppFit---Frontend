import { ReactNode } from "react"

interface ContentContainerProps {
  children: ReactNode
}

export const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <div className=" mt-10 sm:mt-0 ">
      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          {children}
        </div>
      </div>
    </div>
  )
}