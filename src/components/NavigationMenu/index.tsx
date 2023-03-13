import Link from "next/link"
import { menuItems } from "./menuItems"

export const NavigationMenu = () => {
  return (
    <nav className="w-1/3">
      <ul className="flex items-center justify-between font-medium">
        {menuItems.map(item => {
          return (
            <li key={item.children}>
              <Link href={item.href}>
                {item.children}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}