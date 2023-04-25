import { Header, HeaderMenu } from './Navbar.styles'
import { NavItems } from '../NavItems/NavItems'

export const Navbar = () => {
  return (
    <Header>
      <a>Lacrei</a>
      <HeaderMenu>
        <NavItems />
      </HeaderMenu>
    </Header>
  )
}
