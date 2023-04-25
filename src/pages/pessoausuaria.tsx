import { Navbar } from '@/components/Navbar/Navbar'
import { GlobalStyles } from '@/styles/globalStyle'

import {
  SubTitle,
  SubTitleAlternative,
  Title,
  Wrapper
} from '@/styles/pages/home.styles'
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
        <div>
          <Title>Pessoa Usuária</Title>
          <SubTitleAlternative>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </SubTitleAlternative>
        </div>

        <Image src={userImg} width="400" height="400" alt="digital-doctor" />
      </Wrapper>
      <Footer />
    </>
  )
}
