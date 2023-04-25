import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItems = () => {
  const router = useRouter()

  const isActive = (pathname: string): boolean => {
    return router.pathname === pathname
  }

  return (
    <>
      <Link href="/" className={isActive('/') ? 'active' : ''}>
        Home
      </Link>
      <Link
        href="/pessoausuaria"
        className={isActive('/pessoausuaria') ? 'active' : ''}
      >
        Pessoa Usuária
      </Link>
      <Link
        href="/profissional"
        className={isActive('/profissional') ? 'active' : ''}
      >
        Profissional
      </Link>
    </>
  )
}
