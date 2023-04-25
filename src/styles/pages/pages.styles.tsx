import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 1.5rem;
  font-family: 'nunito-bold';

  @media (min-width: 500px) {
    margin-top: 1rem;
    font-size: 2rem;
    padding-right: 2rem;
    line-height: 3.5rem;
  }

  @media (min-width: 1040px) {
    font-size: 3rem;
  }
`

export const SubTitle = styled.p`
  padding-top: 1rem;
  font-size: 1.25rem;
  font-family: 'nunito-regular';
  line-height: 1.8rem;
  margin-top: 2rem;

  @media (min-width: 500px) {
    font-size: 1rem;
    line-height: 2.2rem;
  }

  @media (min-width: 1040px) {
    font-size: 1.5rem;
  }
`

export const SubTitleAlternative = styled.p`
  margin-top: 2rem;
  font-size: 0.875rem;
  font-family: 'nunito-regular';
  line-height: 1.4rem;
  border-left: 5px solid rgb(1, 135, 98);
  padding-left: 1rem;

  @media (min-width: 500px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`

export const Wrapper = styled.main`
  padding: 1.25rem;

  @media (min-width: 450px) {
    padding: 2.25rem 3rem;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 1040px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
`
