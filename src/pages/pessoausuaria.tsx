import { Navbar } from '@/components/Navbar/Navbar'
import { GlobalStyles } from '@/styles/globalStyle'

import {
  Content,
  SubTitle,
  SubTitleAlternative,
  Title,
  Wrapper
} from '@/styles/pages/pages.styles'
import Image from 'next/image'
import userImg from '../Assets/images/user.svg'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export default function pessoaUsuaria() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <Content>
          <Title>Pessoa Usuária</Title>
          <SubTitleAlternative>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </SubTitleAlternative>
        </Content>

        <Image src={userImg} width="555" height="421" alt="digital-doctor" />
      </Wrapper>
      <Footer />
    </>
  )
}
