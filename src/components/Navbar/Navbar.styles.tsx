import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  height: 6rem;

  @media (min-width: 500px) {
    height: 5rem;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
  }

  @media (min-width: 1040px) {
    padding: 0 3rem;
  }

  a {
    text-align: center;
    color: #018762;
    font-family: 'nunito-bold';
    font-size: 2rem;
  }
`
export const HeaderMenu = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 0.3rem;

  @media (min-width: 400px) {
    gap: 3rem;
  }

  a {
    color: black;
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (min-width: 500px) {
    gap: 1rem;
  }

  .active {
    color: #018762;
  }
`
