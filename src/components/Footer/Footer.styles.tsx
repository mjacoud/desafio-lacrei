import styled from 'styled-components'

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: 2.5rem;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0.5rem 0;

  @media (min-width: 500px) {
    padding: 1.75rem 0;
    gap: 4rem;
  }
`

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 1rem;
  padding: 2rem 0px 0.5rem;
  border-top: rgb(176, 224, 211) 1px solid;
  justify-content: flex-start;

  a {
    color: black;
    font-size: 0.875rem;
    font-family: 'nunito-regular';
    display: flex;

    @media (min-width: 500px) {
      gap: 2rem;
      font-size: 1rem;
    }
  }

  @media (min-width: 500px) {
    gap: 1rem;
  }
  .active {
    color: #1f1f1f;

    font-family: 'nunito-bold';
  }

  p {
    font-family: 'nunito-regular';
    font-size: 0.75rem;
    color: rgb(81, 81, 81);
  }
`
