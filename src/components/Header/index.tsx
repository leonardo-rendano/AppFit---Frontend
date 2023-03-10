import { NavigationMenu } from "../NavigationMenu"

export const Header = () => {
  return (
    <header className="w-5/6 m-auto border-b-2 h-20 flex items-center justify-between fixed top-0 left-0 right-0">
      <h1 className="text-3xl text-black font-semibold">
        App
        <span className="text-orange-300">
          Fit
        </span>
      </h1>

      <NavigationMenu />
    </header>
  )
}