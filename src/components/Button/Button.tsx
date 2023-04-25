import styled from 'styled-components'

const buttonStyle =
  ' box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);border-radius: 0.5rem;padding: 0.75rem 2rem;border-color: transparent;font-family:"nunito-bold"; cursor: pointer;text-align: center;'

export const PrimaryButton = styled.a`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  ${buttonStyle}

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.125rem;
  }
`

export const SecondaryButton = styled.a`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  ${buttonStyle}
  border: 2px solid var(--primary-color);

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.125rem;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  gap: 1rem;

  @media (min-width: 520px) {
    flex-direction: row;
    gap: 6rem;
    justify-content: flex-start;
  }
`
