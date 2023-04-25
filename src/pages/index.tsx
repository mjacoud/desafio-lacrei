import { Navbar } from '@/components/Navbar/Navbar'
import { GlobalStyles } from '@/styles/globalStyle'

import { Content, SubTitle, Title, Wrapper } from '@/styles/pages/home.styles'
import {
  ButtonContainer,
  PrimaryButton,
  SecondaryButton
} from '@/components/Button/Button'
import Image from 'next/image'
import homeImg from '../Assets/images/home.svg'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <Content>
          <div>
            <Title>Boas vindas a Lacrei Saúde</Title>
            <SubTitle>
              Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </SubTitle>
          </div>
          <ButtonContainer>
            <PrimaryButton>
              <Link href="/pessoausuaria">Pessoa Usuária</Link>
            </PrimaryButton>
            <SecondaryButton>
              <Link href="/profissional">Profissional</Link>
            </SecondaryButton>
          </ButtonContainer>
        </Content>
        <Image src={homeImg} width="400" height="400" alt="digital-doctor" />
      </Wrapper>
      <Footer />
    </>
  )
}
