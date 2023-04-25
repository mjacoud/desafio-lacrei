import facebook from '../../Assets/images/facebook.svg'
import instagram from '../../Assets/images/instagram.svg'
import linkedin from '../../Assets/images/linkedin.svg'
import Image from 'next/image'

export const SocialLinks = () => {
  return (
    <>
      <a href="https://www.facebook.com/lacrei.saude">
        <Image src={facebook} width="32" height="32" alt="facebook-icon" />
      </a>
      <a href="https://www.instagram.com/lacrei.saude/">
        <Image src={instagram} width="32" height="32" alt="instagram-icon" />
      </a>
      <a href="https://www.linkedin.com/company/lacrei/">
        <Image src={linkedin} width="32" height="32 " alt="linkedin-icon" />
      </a>
    </>
  )
}
