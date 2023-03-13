import Link from "next/link"

export const NavigationMenu = () => {

  const menuItems = [
    {
      href: '/teachers',
      children: 'Professores'
    },
    {
      href: '/students',
      children: 'Alunos'
    },
    {
      href: '/sets',
      children: 'Séries'
    },
    {
      href: '/exercises',
      children: 'Exercícios'
    }
  ]

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