import { NavItems } from '../NavItems/NavItems'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { FooterMenu, FooterWrapper, SocialContainer } from './Footer.styles'

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterMenu>
          <NavItems />
        </FooterMenu>
        <SocialContainer>
          <SocialLinks />
        </SocialContainer>
        <p>Desafio Front-end</p>
      </FooterWrapper>
    </>
  )
}
