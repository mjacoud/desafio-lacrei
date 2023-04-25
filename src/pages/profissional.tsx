import { Navbar } from '@/components/Navbar/Navbar'
import { GlobalStyles } from '@/styles/globalStyle'

import {
  Content,
  SubTitleAlternative,
  Title,
  Wrapper
} from '@/styles/pages/pages.styles'
import Image from 'next/image'
import professionalImg from '../Assets/images/professional.svg'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'

export default function Profissional() {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Navbar />
      <Wrapper>
        <Content>
          <Title>Profissional</Title>
          <SubTitleAlternative>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </SubTitleAlternative>
        </Content>

        <Image
          src={professionalImg}
          width="555"
          height="421"
          alt="digital-doctor"
        />
      </Wrapper>
      <Footer />
    </>
  )
}
