import { Navbar } from '@/components/Navbar/Navbar'
import { GlobalStyles } from '@/styles/globalStyle'

import { SubTitleAlternative, Title, Wrapper } from '@/styles/pages/home.styles'
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
        <div>
          <Title>Profissional</Title>
          <SubTitleAlternative>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+
          </SubTitleAlternative>
        </div>

        <Image
          src={professionalImg}
          width="400"
          height="400"
          alt="digital-doctor"
        />
      </Wrapper>
      <Footer />
    </>
  )
}
