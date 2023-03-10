import Link from "next/link"

export const NavigationMenu = () => {
  return (
    <nav className="w-1/3">
      <ul className="flex items-center justify-between font-medium">
        <li>
          <Link href='/teachers'>
            Professores
          </Link>
        </li>
        <li>
          <Link href='/students'>
            Alunos
          </Link>
        </li>
        <li>
          <Link href='/sets'>
            Séries
          </Link>
        </li>
        <li>
          <Link href='/exercises'>
            Exercícios
          </Link>
        </li>
      </ul>
    </nav>
  )
}